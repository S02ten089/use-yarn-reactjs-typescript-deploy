export interface cardInfo {
    id: number;
    name?: string;
    birthday: string;
    skillProgramer: skillProgrameR;
    email: string; // Email riêng biệt
    phone: phone; // Số điện thoại riêng biệt
    contach: contach; // Chuỗi chứa thông tin liên hệ (email và phone kết hợp)
    birthdayThang:string;
    birthdayNam:string;
}
export interface skillProgrameR{
    skill1:string;
    skill2:string;
    skill3:string;
    skill:string;
}
export interface contach{
    header:string;
    main:string;
    footer:footeR;
}
export interface phone{
    ese: number|string
    phoneNumber: number|string
}
interface footeR {
    linkedin?: string;
    github?: string;
    twitter?: string;
  }
export interface mockApi {
    id: number;
    name?: string;
    avatar?:string|null|any|[iconEro];
    linkname:string;
    info: string;
    content:string;
    nameIcon:nameIcon;
    link:link;
    icon:icon;
    iconbutton:iconbutton;
    linkiconbutton:linkiconbutton;
    
    //css
    cssAvatar:string;
    cssInfo:string;
    cssContent:string;
    cssButton:string;
    cssBgButton:string;
    cssButtonClick:string;
    cssColorButton:string;
    cssBg:string;
    cssImgBg:string;
}
export interface link {
    link1:string
    link2:string
    link3:string
    link4:string
    link:string
}
export interface icon {
    icon1?: string|null|any|[iconEro]
    icon2?: string|null|any|[iconEro]
    icon3?: string|null|any|[iconEro]
    icon4?: string|null|any|[iconEro]
    icon?: string|null|any|[iconEro]
}
export interface iconbutton {
    iconbutton1?: string|null|any|[iconEro]
    iconbutton2?: string|null|any|[iconEro]
    iconbutton3?: string|null|any|[iconEro]
    iconbutton?: string|null|any|[iconEro]
}
export interface linkiconbutton {
    linkiconbutton1: string
    linkiconbutton2: string
    linkiconbutton3: string
    linkiconbutton4: string
    linkiconbutton: string
}
export interface iconEro {
    iconEro:string
}
export interface nameIcon {
    nameIcon1:string
    nameIcon2:string
    nameIcon3:string
    nameIcon4:string
    nameIcon5:string
    nameIcon:string
}