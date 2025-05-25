import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './index.module.scss';

interface Profile {
  id: string;
  user_id: string;
  full_name: string;
  title: string;
  email: string;
  avatar_url: string;
  status: string; // status là số dạng string ('1', '2', ...)
}

const roleMap: { [key: string]: { label: string; color: string } } = {
  '1': { label: 'Người dùng', color: 'blue' },
  '2': { label: 'Trải nghiệm', color: 'green' },
  '3': { label: 'Doanh nghiệp', color: 'orange' },
  '4': { label: 'Quản trị viên', color: 'purple' },
  '5': { label: 'Bị khóa', color: 'red' },
  '': { label: 'Chưa cập nhật', color: 'gray' },
};

const AboutCardList: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [filtered, setFiltered] = useState<Profile[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const fetchProfiles = async () => {
    try {
      const baseURL = process.env.REACT_APP_LINK_SERVER;
      const baseLinkApi = process.env.REACT_APP_API_LINK_CARD_BACKUP;
      const res = await axios.get(`${baseURL}/api/${baseLinkApi}`);
      setProfiles(res.data);
      setFiltered(res.data);
    } catch (err) {
      console.error('Lỗi khi tải danh sách');
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  useEffect(() => {
    let results = profiles;

    if (searchTerm) {
      results = results.filter(p =>
        p.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      results = results.filter(p => p.status === statusFilter);
    }

    setFiltered(results);
  }, [searchTerm, statusFilter, profiles]);

  const deleteCard = async (id: string) => {
    if (!window.confirm('Bạn có chắc muốn xóa hồ sơ này?')) return;

    try {
      const baseURL = process.env.REACT_APP_LINK_SERVER;
      await axios.delete(`${baseURL}/api/delete_card.php?id=${id}`);
      fetchProfiles();
    } catch (err) {
      alert('Lỗi khi xóa');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>🌟 Danh sách thành viên đã đăng ký</h1>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="🔍 Tìm kiếm theo tên hoặc email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">Tất cả</option>
          <option value="1">Người dùng</option>
          <option value="2">Trải nghiệm</option>
          <option value="3">Doanh nghiệp</option>
          <option value="4">Quản trị viên</option>
          <option value="5">Bị khóa</option>
          <option value="">Chưa cập nhật</option>
        </select>
      </div>

      <div className={styles.grid}>
        {filtered.map(profile => (
          <div key={profile.id} className={styles.card}>
            <img src={profile.avatar_url} alt={profile.full_name} className={styles.avatar} />

            <div className={styles.info}>
              <h2>{profile.full_name}</h2>
              <p className={styles.title}>{profile.title}</p>
              <p>{profile.email}</p>
              <span className={styles.status}>
                {roleMap[profile.status]?.label || 'Không xác định'}
              </span>

              <div className={styles.actions}>
                <button
                  onClick={() => window.location.href = `/card/${profile.user_id}`}
                  className={styles.view}
                >
                  Xem
                </button>
                <button
                  onClick={() => deleteCard(profile.id)}
                  className={styles.delete}
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && <p className={styles.empty}>Không tìm thấy kết quả phù hợp.</p>}
      </div>
    </div>
  );
};

export default AboutCardList;
