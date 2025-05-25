import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './index.module.scss';

interface Profile {
  full_name: string;
  title: string;
  bio: string;
  avatar_url: string;
  phone: string;
  email: string;
  website: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  github: string;
  address: string;
}

const AboutCardDetail: React.FC = () => {
  const { link } = useParams<{ link: string }>();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseURL = process.env.REACT_APP_LINK_SERVER;
        const baseLinkApi = process.env.REACT_APP_API_LINK_CARD;
        if (!baseURL || !baseLinkApi) {
          setError("Không tìm thấy địa chỉ API từ .env");
          setLoading(false);
          return;
        }

        const res = await axios.get(`${baseURL}/api/${baseLinkApi}?user_id=${link}`);

        if (res.data.error) {
          setError(res.data.error);
        } else {
          setProfile(res.data);
        }
      } catch (err) {
        setError('Lỗi khi tải dữ liệu');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [link]);

  if (loading) return <div className={styles.loading}>Đang tải...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!profile) return null;

  return (
    <div className={styles.card}>
      <img src={profile.avatar_url} alt={profile.full_name} className={styles.avatar} />
      <h1 className={styles.name}>{profile.full_name}</h1>
      <h2 className={styles.title}>{profile.title}</h2>
      <p className={styles.bio}>{profile.bio}</p>

      <div className={styles.info}>
        <p><strong>Điện thoại:</strong> {profile.phone}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Website:</strong> <a href={profile.website} target="_blank" rel="noreferrer">{profile.website}</a></p>
        <p><strong>Địa chỉ:</strong> {profile.address}</p>
      </div>

      <div className={styles.social}>
        {profile.facebook && <a href={profile.facebook} target="_blank" rel="noreferrer">Facebook</a>}
        {profile.instagram && <a href={profile.instagram} target="_blank" rel="noreferrer">Instagram</a>}
        {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
        {profile.github && <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>}
      </div>
    </div>
  );
};

export default AboutCardDetail;
