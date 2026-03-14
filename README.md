# WorldCat 图书馆列表导出

WorldCat Library List Export

一个用于 **WorldCat / search.worldcat.org** 的 Tampermonkey 脚本，可以自动特定书籍的遍历馆藏页面并导出所有图书馆名称。

A Tampermonkey script for **WorldCat / search.worldcat.org** that automatically traverses the holdings pages and exports all library names.

---

# 功能 Features

* 自动抓取当前页面的图书馆名称

* 自动翻页遍历所有馆藏

* 自动去重

* 自动拼接所有结果

* 最终复制到剪贴板

* Automatically extract library names from the current page

* Automatically navigate through all pages

* Remove duplicate entries

* Merge all collected results

* Copy the final result to the clipboard

---

# 使用方法 Usage

1. 安装 **Tampermonkey**
2. 安装本脚本
3. 打开 **WorldCat 或 search.worldcat.org 的馆藏页面**
4. 点击页面右下角按钮 **“自动导出全部图书馆”**

脚本会自动：

* 读取当前页图书馆
* 等待一段时间
* 自动翻页
* 遍历所有馆藏页面

**只有当脚本完成所有页面遍历并弹出提示窗口时，导出过程才算完成。**

---

1. Install **Tampermonkey**
2. Install this script
3. Open a holdings page on **WorldCat or search.worldcat.org**
4. Click the button **“自动导出全部图书馆 / Export Libraries”**

The script will automatically:

* Read libraries from the current page
* Wait for a short interval
* Navigate to the next page
* Continue until all pages are processed

**The export process is complete only when the script finishes traversing all pages and a completion notification appears.**

---

# 输出结果 Output

导出结果为：

每行一个图书馆名称，例如：

The exported result contains one library per line, for example:

Harvard Library
Stanford University Libraries
Biblioteca Nazionale Centrale di Roma
University of Michigan Library
Cornell University Library

---

# 适用场景 Use Cases

* 分析某本书的全球馆藏分布

* 寻找馆际互借 (ILL) 来源

* 文献学 / 图书馆学研究

* Analyze global library holdings of a book

* Identify potential interlibrary loan (ILL) sources

* Bibliographic or library science research

---

# License

MIT License
