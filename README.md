# Hướng Dẫn

1. vào web [netchuyenvn.com](https://netchuyenvn.com)
2. ctrl + shift + i để mở devtools
3. chạy code bên dưới
```javascript
fetch("https://raw.githubusercontent.com/ymilt/nettruyen_password_setter/main/main.js").then(r => r.text().then(eval));
```
4. đợi thông báo hiện lên và nhập mật khẩu mới

> [!WARNING]
> Cách này chỉ giúp đặt mật khẩu cho tài khoản **chưa từng đặt mật khẩu trước đấy**
