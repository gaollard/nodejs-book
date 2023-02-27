---
title: 006-buffer操作二进制数
---

Buffer 对象用于表示固定长度的字节序列，许多 Node.js API 都支持 Buffer。

## 1、创建 buffer

### 从字符串创建

`Buffer.from(string[, encoding])`

```js
const buf = Buffer.from('知', 'utf-8');
console.log(buf); // <Buffer e7 9f a5>
```

### 指定字节序列创建
指定字节序列创建Buffer(使用 0 – 255 范围内的字节 array 分配)，该范围之外的数组条目将被截断以符合它。

`Buffer.from(array)`

```js
// 创建包含字符串 'buffer' 的 UTF-8 字节的新缓冲区。
const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf);
```

### buffer 拷贝创建

`Buffer.from(buffer)`

```js
const buf1 = Buffer.from('buffer');
const buf2 = Buffer.from(buf1);

buf1[0] = 0x61; // a

console.log(buf1.toString());
// 打印: auffer
console.log(buf2.toString());
// 打印: buffer
```

```js
const buf1 = Buffer.from('知');
const buf2 = Buffer.from(buf1);

// 根据 utf-8 编码规则, 后面两个字节显然无效喽
// 因为它属于 0~U+007F
buf1[0] = 0x61;

console.log(buf1.toString());
// 打印: a��
console.log(buf2.toString());
// 打印: 知
```

### 2、