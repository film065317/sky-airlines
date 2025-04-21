
document.getElementById('flightBookingForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const date = document.getElementById('date').value;
  const passengers = document.getElementById('passengers').value;
  const travelClass = document.getElementById('class').value;

  alert(`ค้นหาเที่ยวบินจาก ${from} ไปยัง ${to} วันที่ ${date} สำหรับผู้โดยสาร ${passengers} คน ชั้น ${travelClass}`);
});
