// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
"use client";
import React, { useState, useEffect } from "react";
import { Button } from "antd";

export default function Page() {
  const [rerender, setRerender] = useState(0);
  return (
    <div>
      <h1>Hello, Dashboard Page {rerender}!</h1>;
      <Button
        onClick={() => {
          setRerender(rerender + 1);
        }}
      >
        try rerender
      </Button>
    </div>
  );
}
