import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  VStack,
  Textarea,
  Input,
  Image,
  HStack,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon, ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

type BlockType = "text" | "image";

interface Block {
  type: BlockType;
  content: string;
}

const EditPage: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("editablePage");
    if (saved) {
      try {
        const parsed: Block[] = JSON.parse(saved);
        setBlocks(parsed);
      } catch {
        console.warn("Dữ liệu localStorage không hợp lệ.");
      }
    }
  }, []);

  const addBlock = (type: BlockType) => {
    const newBlock: Block =
      type === "text"
        ? { type, content: "Nhập văn bản ở đây..." }
        : { type, content: "https://via.placeholder.com/300x150" };
    setBlocks([...blocks, newBlock]);
  };

  const updateBlock = (index: number, content: string) => {
    const newBlocks = [...blocks];
    newBlocks[index].content = content;
    setBlocks(newBlocks);
  };

  const moveBlock = (from: number, to: number) => {
    if (to < 0 || to >= blocks.length) return;
    const updated = [...blocks];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    setBlocks(updated);
  };

  const deleteBlock = (index: number) => {
    const updated = [...blocks];
    updated.splice(index, 1);
    setBlocks(updated);
  };

  const saveLayout = () => {
    localStorage.setItem("editablePage", JSON.stringify(blocks));
    alert("Đã lưu bố cục!");
  };

  return (
    <Box p={6}>
      <Text fontSize="2xl" mb={4}>🛠️ </Text>

      <HStack mb={4} spacing={4}>
        <Button onClick={() => addBlock("text")}>➕ Thêm Văn bản</Button>
        <Button onClick={() => addBlock("image")}>🖼️ Thêm Hình ảnh</Button>
        <Button colorScheme="green" onClick={saveLayout}>💾 Lưu</Button>
      </HStack>

      <VStack spacing={6} align="stretch">
        {blocks.map((block, i) => (
          <Box
            key={i}
            border="1px solid"
            borderColor="gray.300"
            p={4}
            borderRadius="md"
            bg="white"
            boxShadow="md"
          >
            <HStack justifyContent="space-between" mb={2}>
              <Text fontWeight="bold">
                {block.type === "text" ? "Văn bản" : "Hình ảnh"}
              </Text>
              <HStack>
                <IconButton
                  icon={<ArrowUpIcon />}
                  aria-label="Move up"
                  size="sm"
                  isDisabled={i === 0}
                  onClick={() => moveBlock(i, i - 1)}
                />
                <IconButton
                  icon={<ArrowDownIcon />}
                  aria-label="Move down"
                  size="sm"
                  isDisabled={i === blocks.length - 1}
                  onClick={() => moveBlock(i, i + 1)}
                />
                <IconButton
                  icon={<DeleteIcon />}
                  aria-label="Delete"
                  colorScheme="red"
                  size="sm"
                  onClick={() => deleteBlock(i)}
                />
              </HStack>
            </HStack>

            {block.type === "text" ? (
              <Textarea
                value={block.content}
                onChange={(e) => updateBlock(i, e.target.value)}
              />
            ) : (
              <VStack spacing={2}>
                <Input
                  value={block.content}
                  onChange={(e) => updateBlock(i, e.target.value)}
                />
                <Image src={block.content} maxW="100%" alt="Image preview" />
              </VStack>
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default EditPage;
