import { useState, useMemo, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Spin } from 'antd';
import type { UserInfo } from '../contexts/user';
import { UserContext } from '../contexts/user';

export default function Root() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<UserInfo>();

  const user = useMemo(() => ({ userInfo, setUserInfo }), [userInfo]);

  useEffect(() => {
    (async () => {
      try {
        const info = await new Promise<UserInfo>((resolve) => {
          setTimeout(() => {
            resolve({ name: 'Lee', auth: ['/foo'] });
          }, 1500);
        });
        if (info) {
          if (
            location.pathname === '/' ||
            location.pathname === '/login' ||
            !info.auth.includes(location.pathname)
          ) {
            navigate(info.auth[0]);
          }

          setUserInfo(info);
        } else if (location.pathname !== '/login') {
          navigate('/login');
        }

        setLoading(false);
      } catch {
        if (location.pathname !== '/login') {
          navigate('/login');
        }

        setLoading(false);
      }
    })();
  }, [navigate]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <IntlProvider
      locale="en-US"
      messages={{ login: 'Login', foo: 'Foo', bar: 'Bar' }}
    >
      <UserContext.Provider value={user}>
        <Outlet />
      </UserContext.Provider>
    </IntlProvider>
  );
}
