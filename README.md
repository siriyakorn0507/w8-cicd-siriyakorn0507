# Week 8 CI/CD Lab

## Self-study Extension: Add Test Coverage

เพิ่ม automated tests จำนวน 2 กรณีใน `index.test.js`

### Tests ที่เพิ่ม

1. **Thai name**
   - ทดสอบการรับชื่อภาษาไทย
   - ลดความเสี่ยงด้านการรองรับ Unicode และข้อมูลผู้ใช้ที่ไม่ใช่ภาษาอังกฤษ

2. **Empty string**
   - ทดสอบกรณีที่ผู้ใช้ส่งชื่อเป็นค่าว่าง
   - ลดความเสี่ยงจาก input ที่ไม่มีข้อมูล และช่วยตรวจสอบพฤติกรรมของ function เมื่อได้รับข้อมูลว่าง

### ผลการทดสอบ

หลังจากเพิ่ม tests แล้ว `npm test` ผ่านทั้งหมด 4 tests:

- Tests: 4
- Pass: 4
- Fail: 0
