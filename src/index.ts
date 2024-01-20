export const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  
  if (parts.length === 2) {
    // 找到了 cookie，返回其值
    return parts.pop()?.split(';').shift();
  } else {
    // 未找到 cookie
    return undefined;
  }
};
