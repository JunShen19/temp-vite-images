import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queyClient = new QueryClient();
// 使用 ReactDOM.createRoot 創建根節點的根（root）
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <QueryClientProvider client={queyClient}>
      <App />
      <ReactQueryDevtools initialOpen={true} />
    </QueryClientProvider>
  </AppProvider>
);
