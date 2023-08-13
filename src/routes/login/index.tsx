import { useFm } from '../../hooks/fm';

export default function Login() {
  const fm = useFm();

  return <div>{fm('login')}</div>;
}
