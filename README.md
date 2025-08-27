# TypeScript Type Validation Interview Question

## 題目描述 (Problem Description)

這是一個 TypeScript 型別安全的面試考題。目前的程式碼使用了 `as` 型別斷言，但這並不安全，因為它會繞過 TypeScript 的型別檢查。

**任務**: 請移除 `as` 斷言，透過型別安全的判斷讓 TypeScript 錯誤消除。

## 當前問題 (Current Issue)

```typescript
type ApiError = { error: string };
type ApiData = { id: number; name: string };
type ApiResponse = ApiError | ApiData;

function handleResponse(res: ApiResponse) {
  const data = res as ApiData;  // ❌ 不安全的型別斷言
  console.log(data.name);       // 如果 res 是 ApiError，這裡會出錯
}
```

## 開始解題

請修改 `index.ts` 文件中的 `handleResponse` 函數，使其在不使用型別斷言的情況下安全地處理 `ApiResponse`。