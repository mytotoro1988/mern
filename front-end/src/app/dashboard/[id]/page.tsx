"use client";
import { Button, Modal, Space } from "antd";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const handleOk = () => {
    console.log("123");
  };

  const handleCancel = () => {
    router.push("/dashboard");
  };
  return (
    <div>
      test {params.id}
      {/* <Modal
        open={!!params.id}
        title="Title"
        onOk={() => {
          handleOk();
        }}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <p>{params.id}</p>
      </Modal> */}
    </div>
  );
}
