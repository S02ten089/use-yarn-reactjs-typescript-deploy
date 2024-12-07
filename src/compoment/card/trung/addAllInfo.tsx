import React from "react";
import { Box, Heading, Image, Text, Divider, Link, VStack, HStack, Button,Input } from '@chakra-ui/react';

function AddInfoAll (){
    return (
        <form action="">
            <div>
                <label htmlFor="">Tiêu đề</label>
                <input type="text" name="TieuDe" id="Tieude" value=""/>
            </div>
            <div>
                <label htmlFor="">Tên</label>
                <input type="text" name="Ten" id="Ten" value="" />
            </div>
            <div>
                <label htmlFor="">Nội dung</label>
                <textarea name="NoiDung" id="Noidung" rows={20} cols={50} ></textarea>
            </div>
            <div>
                <label htmlFor="">Ảnh</label>
                <input type="file" />
            </div>
            <button type="submit" name="LuuThongTin">Lưu thông tin đã nhập</button>
        </form>
    );
}

export default AddInfoAll;