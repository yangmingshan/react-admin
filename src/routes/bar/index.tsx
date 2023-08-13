import { useFm } from '../../hooks/fm';

export default function Bar() {
  const fm = useFm();

  return <div>{fm('bar')}</div>;
}
