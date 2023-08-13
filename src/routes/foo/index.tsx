import { useFm } from '../../hooks/fm';

export default function Foo() {
  const fm = useFm();

  return <div>{fm('foo')}</div>;
}
