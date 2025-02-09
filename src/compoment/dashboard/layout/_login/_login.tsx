import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    LoadingOverlay,
    Box,
  } from "@mantine/core";
  import classes from "./AuthenticationTitle.module.scss";
  import { useDisclosure, useLocalStorage } from "@mantine/hooks";
  import { hasLength, isEmail, useForm } from "@mantine/form";
  import { FormEvent, useEffect, useState } from "react";
  import { useLocation, useNavigate, useParams } from "react-router-dom";
  import { LoginModel } from "../../model/LoginModel";
  import Repository from "../../_database/helper/HttpHelper";
  import { isNullOrEmpty } from "../../_database/extension/StringExtension";
  import { AuthProvider } from "../../_database/helper/IAuthProvider";
  import { NotificationExtension } from "../../_database/extension/NotificationExtension";
  import AuthService from "../../api/login/auth.service";
  
  export function AuthenticationTitle() {
    //#region  state
    const entity = {
      username: "",
      password: "",
      remember: false,
    };
    const form = useForm<LoginModel>({
      initialValues: {
        ...entity,
      },
  
      validate: {
        username: isEmail("Vui lòng nhập Email"),
        password: hasLength(
          { min: 5, max: 100 },
          "Mật khẩu phải chưa từ 5-10 kí tự !"
        ),
      },
    });
    const navigate = useNavigate();
  
    const [visible, { toggle, open, close }] = useDisclosure(false);
    const [visible1, setvisible1] = useState(false);
    const repository = new Repository("http://localhost:50001/api/v1");
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const callbackParam = queryParams.get("callback");
    const [value, setValue] = useLocalStorage({ key: "token", defaultValue: "" });
  
    //#endregion
  
    //#region use
    //#region  auth
    const isAuthenticated = AuthProvider.isAuthenticated();
  
    const login = async (e: FormEvent) => {
      e.preventDefault();
      setvisible1(true);
      const data = form.values;
      // const resLogin = await IAuthProvider.signin(data);
      const resLogin = await AuthProvider.signin(data);
      setvisible1(false);
      if (resLogin !== undefined && !isNullOrEmpty(resLogin.data.jwt)) {
        setValue(resLogin.data.jwt);
        navigate(callbackParam ?? "/");
      }
    };
  
    const fakeLogin = async (e: FormEvent) => {
      e.preventDefault();
      setvisible1(true);
      localStorage.setItem("token", "fake token");
      AuthProvider.username = "da";
      NotificationExtension.Success("Đăng nhập thành công !");
      setvisible1(false);
      navigate(callbackParam ?? "/");
    };
  
    const handleLogin = async (dataSubmit: LoginModel) => {
      open();
      const data = {
        ...dataSubmit,
        username: dataSubmit.username.toLocaleLowerCase(),
      };
      await AuthService.login(data).then(() => {
        navigate(callbackParam ?? "/");
      });
      close();
    };
  
    useEffect(() => {
      return () => {
        window.scrollTo(0, 0);
        if (isAuthenticated === true) {
          navigate(callbackParam ?? "/");
        }
      };
    }, []);
  
    return (
      <Box
        component="form"
        maw={400}
        mx="auto"
        onSubmit={form.onSubmit((e: LoginModel) => {
          handleLogin(e);
        })}
      >
        <LoadingOverlay
          visible={visible1}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <Title ta="center" className={classes.title}>
          Xin chào!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Bạn không có tài khoản?{" "}
          <Anchor
            onClick={() => navigate("/auth/register")}
            size="sm"
            underline="hover"
          >
            Tạo mới tài khoản
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="Email: "
            placeholder="Email..."
            withAsterisk
            mt="md"
            {...form.getInputProps("username")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            withAsterisk
            mt="md"
            {...form.getInputProps("password")}
          />
          <Group justify="space-between" mt="lg">
            <Checkbox
              label="Ghi nhớ"
              onChange={(e) => {
                form.values.remember = e.target.checked;
              }}
            />
            <Anchor component="button" size="sm">
              Quên mật khẩu?
            </Anchor>
          </Group>
  
          <Button type="submit" fullWidth mt="xl">
            Đăng nhập
          </Button>
        </Paper>
      </Box>
    );
  }