import { Button } from 'antd';
import { useNavigate } from 'react-router';

export default function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex-center flex-col h-100vh">
      <h1 text="40px" font="bold">
        Not Found
      </h1>
      <Button type="link" onClick={goBack}>
        返回上一页
      </Button>
    </div>
  );
}
