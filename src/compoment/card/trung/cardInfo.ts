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