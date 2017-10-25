// datetimepicker
$(function(){
	$('#datetimepicker').datetimepicker({
		format: 'DD/MM/YYYY'
	});

});

// xác nhận xoá
function deleteConfirm()
{
	var x = confirm("Bạn có chắc chắn muốn xóa không?");
	if(!x)
	{
		return false;
	}
		return true;
}
	/*phân trang và lọc dữ liệu bằng datatable*/ 
  	$(document).ready(function(){
     	$('#datatable').DataTable({
        responsive: true,
        "language": {
            "lengthMenu": "Hiển thị _MENU_ dòng dữ liệu trên một trang",
            "info": "Hiển thị _START_ trong tổng số _TOTAL_ dòng dữ liệu",
            "infoEmpty": "Dữ liệu rỗng",
            "emptyTable": "Chưa có dữ liệu nào",
            "processing": "Đang xử lý...",
            "search": "Tìm kiếm:",
            "loadingRecords": "Đang load dữ liệu...",
            "zeroRecords": "không tìm thấy dữ liệu",
            "infoFiltered": "(Được từ tổng số _MAX_ dòng dữ liệu)",
            "paginate": {
              "first": "|<",
              "last": ">|",
              "next": ">>",
              "previous": "<<"
            }
        },
        "lengthMenu": [[5, 10, 15, 20, 25, 30, -1], [5, 10, 15, 20, 25, 30, "Tất cả"]]
      });
     /* new $.fn.dataTable.FixedHeader( table );*/
    });