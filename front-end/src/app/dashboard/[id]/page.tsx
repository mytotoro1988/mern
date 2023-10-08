"use client";
import { Button, Modal, Space } from "antd";
import type { Route } from "next";
import Link from "next/link";
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
      <Link href="/">hello</Link>
      <div>
        <Link href={`/dashboard/${params.id}`}>hi</Link>
      </div>
      <div>
        <Link href={`/dashboard`}>dashboard</Link>
      </div>
      {/* <Link href={("/blog" + slug) as Route} /> */}
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
