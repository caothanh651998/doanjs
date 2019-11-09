var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function dangnhap(){
	
	document.getElementById('id01').style.display='block';
	document.getElementById('a1').style.display='block';

}
function dangnhap1(){
	var names = "ab";
	var passs = 1;

	document.getElementById('a1').style.display='none';
	document.getElementById('a12').style.display='none';
	document.getElementById('id01').style.display='none';
	

	var name= document.getElementById('name').value;
	var pass=  document.getElementById('pass').value;

	if (name == names && pass == passs ) {
		document.getElementById('a1').style.display='none';
		document.getElementById('qla1').style.display='block';
		document.getElementById('11').innerHTML= names.split("", 1);
	}else{
		alert('bạn nhập sai mật khẩu')
		document.getElementById('id01').style.display='block';
		document.getElementById('a1').style.display='block';
		document.getElementById('a12').style.display='block';
	}

}
function scrollCn(){
	window.scrollTo(0, 1430);
}
function scrollGd(){
	window.scrollTo(0, 1950);
}
function scrollTc(){
	window.scrollTo(0, 2500);
}
function scrollVh(){
	window.scrollTo(0, 2800);
}
function scrollTt(){
	window.scrollTo(0, 3300);
}
function scrollX(){
	window.scrollTo(0, 3630);
}
function scrollDl(){
	window.scrollTo(0, 4150);
}
var id=1;
id++;
var data ={
	congnghe: [
		{
			id:id++,
			title:"Vì sao Google không hỗ trợ quay video 4K 60 fps cho Pixel 4?",
			titlecontent:"Google đã giải thích lý do khiến công ty không mang khả năng quay video 4K 60 fps đến Pixel 4, điều mà hầu hết các OEM khác đã áp dụng trong smartphone cao cấp của mình.",
			image:"img/congnghe1.png",
			content:"Theo Neowin, mặc dù sở hữu nhiều tính năng hấp dẫn như màn hình OLED 90 Hz, camera kép ở mặt sau… nhưng việc thiếu khả năng quay video 4K 60 fps (khung hình/giây) trên Pixel 4 đã khiến nhiều người cảm thấy khá thất vọng. <br><br>Để giải quyết vấn đề, Google đã đăng tải trên tài khoản Made by Google của Twitter về hai lý do cho việc làm của họ. Đầu tiên, nó chiếm quá nhiều dung lượng lưu trữ. Thứ hai, mọi người chỉ sử dụng 1.080p, mặc dù điều đó có thể có liên quan đến 1.080p là lựa chọn mặc định trên hầu hết các thiết bị.<br><br>Ý tưởng về việc video 4K 60 fps chiếm quá nhiều không gian lưu trữ là rất đáng chú ý vì dòng Pixel 4 chỉ có cấu hình bộ nhớ trong 64 GB và 128 GB. Nếu không gian lưu trữ lớn hơn, có vẻ như vấn đề này sẽ được giải quyết rất dễ dàng.<br><br>Về việc phần lớn người dùng gắn bó với video 1.080p, điều này có thể đúng. Dẫu vậy, một chiếc điện thoại hàng đầu như Pixel 4 lại thiếu đi một tùy chọn để quay video 40K mà nhiều sản phẩm đối thủ có không phải là điều mà người hâm mộ dòng Pixel mong muốn.",
			titleimg:"Google pixel 4 <br> Ảnh: Reuters",
			anthor:"Theo Nguyễn Đại"

		},
		{
			id:id++,
			title:"Apple và Samsung cùng được hưởng lợi tại thị trường châu Âu",
			titlecontent:"Dữ liệu được công bố bởi Kantar cho thấy doanh số iPhone 11 thực sự cao giúp thúc đẩy thị phần của công ty ở nhiều thị trường, bao gồm cả châu Âu.",
			image:"img/11_nmcp.jpg",
			content:"Theo PhoneArena, Apple chiếm 18,9% doanh số smartphone tại 5 thị trường lớn ở châu Âu, gồm Anh, Đức, Pháp, Ý và Tây Ban Nha trong quý 3/2019, tăng từ 16,3% cùng kỳ năm ngoái. Trong số này, phần lớn bắt nguồn từ thành công của loạt iPhone 11, chiếm 7,4% tổng doanh số iPhone châu Âu trong suốt 3 tháng của quý bất chấp iPhone 11 chỉ được bán từ ngày 20.9. Cũng theo Kantar, iPhone 11 dẫn đầu về doanh số, mặc dù doanh số loạt iPhone 11 Pro không kém quá xa. <br> <br>Bên cạnh các thị trường châu Âu, Úc và Nhật Bản cũng chứng kiến sự tăng trưởng doanh số iPhone, với mức thị phần tương ứng là 39,6% (từ 35,5%) và 39,9% (từ 29,6%).<br> <br>Kantar cũng cho thấy iPhone 11 đã hoạt động khá tốt ở Trung Quốc nhưng sự cạnh tranh lớn từ các nhãn hiệu địa phương khiến thị phần Apple sụt giảm từ 18,9% xuống 17,6%. Điều tương tự cũng xảy ra tại Mỹ khi thị phần iPhone giảm xuống mức 36,1%, từ 38,1% của cùng kỳ năm ngoái. Được biết ở Trung Quốc, thị phần kết hợp của Huawei và Honor là 46,8%.<br> <br>Đáng chú ý, Kantar tuyên bố Samsung dẫn đầu với sự tăng trưởng mạnh mẽ ở các phân khúc tầm thấp đến tầm trung nhờ Galaxy A10e và Galaxy A20, trong khi loạt Pixel 3a và dòng giá rẻ của LG cũng hoạt động khá tốt. Bất chấp sự sụt giảm của thị trường, Samsung vẫn có tỷ lệ tăng trưởng mạnh ở châu Âu, biến công ty trở thành thương hiệu tăng trưởng nhanh nhất trong khu vực. Các sản phẩm của Samsung nằm trong top 10 điện thoại bán chạy nhất gồm Galaxy A50, Galaxy A40 và Galaxy A20e.",
			titleimg:"Dòng iPhone 11 thu hút người tiêu dùng châu Âu <br> Ảnh: Reuters",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Google tạo bước đột phá trong điện toán lượng tử",
			titlecontent:"Google đã đạt bước đột phá trong nghiên cứu điện toán lượng tử khi một bộ xử lý lượng tử thử nghiệm đã hoàn tất một phép tính chỉ trong vài phút, điều mà siêu máy tính truyền thống phải mất đến hàng ngàn năm.",
			image:"img/l1001366-1_mpbc.jpg",
			content:"Theo TechnologyReview, kết quả nghiên cứu của Google nhận được sự quan tâm của các tạp chí khoa học, nơi Google gọi đó là một “uy quyền lượng tử”. Về cơ bản, điều đó có nghĩa máy tính lượng tử đã làm được việc mà một máy tính thông thường không bao giờ có thể làm được.<br><br>CEO Sundar Pichai của Google nói: “Đối với những người trong chúng ta làm việc trong lĩnh vực khoa học và công nghệ, đó là khoảnh khắc của ‘Hello World’ - cột mốc mà chúng tôi xem là ý nghĩa nhất từ trước đến nay trong nỗ lực biến điện toán lượng tử thành hiện thực. Nhưng chúng ta còn một chặng đường dài để đi giữa các thí nghiệm trong phòng thí nghiệm ngày nay và các ứng dụng thực tế vào ngày mai; phải mất nhiều năm nữa chúng ta mới có thể thực hiện một bộ ứng dụng thực tế rộng hơn”.<br><br>Đối thủ của Google là IBM, cho rằng tuyên bố mà Google đưa ra là không chính xác khi công ty đã đánh giá thấp khả năng của những siêu máy tính thông thường.Được biết, điện toán lượng tử là một công nghệ điện toán tiên tiến vẫn còn ở giai đoạn phát triển sớm.",
			titleimg:"Máy tính lượng tử của Google làm được điều mà các máy tính thông thường không bao giờ làm được <br> Ảnh: AFP",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},

		{
			id:id++,
			title:"Huawei mở bán điện thoại màn hình gập Mate X, giá từ 2.400 USD",
			titlecontent:"Sau khi đối mặt với sự chậm trễ do lệnh cấm của Mỹ, cuối cùng Huawei cũng chính thức công bố bán ra chiếc smartphone màn hình gập Mate X, đáng tiếc là hiện nó chỉ mới có mặt tại thị trường Trung Quốc.",
			image:"img/matex_lzqi.jpg",
			content:"Trước đó, Huawei từng mang Mate X trình diễn tại triển lãm di động thế giới MWC 2019 ở Barcelona (Tây Ban Nha) vào tháng 2, bên cạnh mẫu điện thoại màn hình gập Galaxy Fold đáng gờm của đối thủ Samsung. Về cơ bản, tuy đều là điện thoại màn hình gập nhưng cách tiếp cận của Huawei hơi khác với Samsung, thay vì mở ra như một cuốn sách để tạo ra một màn hình lớn phía trong như Fold, Mate X lại có màn hình chính ở bên ngoài và có thể truy cập ngay cả khi điện thoại gập lại.<br><br> Hãng công bố ra mắt Mate X vào hôm 23.10 trên mạng xã hội Weibo và tại một sự kiện ở Thâm Quyến (Trung Quốc), Huawei cũng cho biết Mate X sẽ lên kệ từ ngày 15.11 tới với mức giá khoảng 2.400 USD. Người phát ngôn của Huawei chia sẻ qua email rằng,'chiến lược của chúng tôi dựa trên mạng 5G của các nhà mạng ở những khu vực khác nhau, hiện nay Huawei đã bán ra Mate X tại thị trường Trung Quốc và sẽ xem xét về kế hoạch bán ra ở các thị trường khác trên thế giới'.<br><br>Do vậy, trừ khi bạn chấp nhận mua hàng nội địa dưới dạng xách tay từ Trung Quốc, còn không sẽ phải chờ một thời gian nữa nếu muốn mua phiên bản quốc tế của Mate X. Việc ra mắt hạn chế của Mate X khá phù hợp với bối cảnh hiện tại, ngay cả đối thủ của họ là Samsung dù đang đà thuận lợi nhưng cũng phải rút lại ngày ra mắt Galaxy Fold cho đến khi sửa lỗi dễ hư hỏng màn hình, còn Motorola cũng trì hoãn phát hành điện thoại “làm lại” Razr màn hình gập được đồn đại từ đầu năm nay.<br><br>Theo CNET, vấn đề của Huawei không chỉ nằm ở độ bền của thiết bị mà một số nhà thử nghiệm từng thất vọng với Galaxy Fold hay nhu cầu sản phẩm chưa thực sự cao, mà còn nằm ở việc họ đang bị cấm truy cập vào dịch vụ Google - một rào cản dễ làm nản lòng những người dùng khó tính ở các thị trường ngoài Trung Quốc. Chưa kể, mức giá lên tới 2.400 USD - gấp 2,5 lần giá khởi điểm của iPhone 11 Pro cũng khiến không ít người dùng trung thành suy nghĩ lại. Đổi lại, Huawei đã cập nhật vi xử lý Kirin 990 vừa ra mắt cho Mate X, một động thái tăng cường sức mạnh cho thiết bị mang tính đột phá này.",
			titleimg:"Huawei chính thức ra mắt Mate X tại Trung Quốc <br> Ảnh chụp màn hình CNET",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Người Hàn sẽ hủy diệt phần còn lại ở CKTG, Faker nâng cúp lần 4?",
			titlecontent:"Dữ liệu được công bố bởi Kantar cho thấy doanh số iPhone 11 thực sự cao giúp thúc đẩy thị phần của công ty ở nhiều thị trường, bao gồm cả châu Âu.",
			image:"img/11.jpg",
			content:"Theo PhoneArena, Apple chiếm 18,9% doanh số smartphone tại 5 thị trường lớn ở châu Âu, gồm Anh, Đức, Pháp, Ý và Tây Ban Nha trong quý 3/2019, tăng từ 16,3% cùng kỳ năm ngoái. Trong số này, phần lớn bắt nguồn từ thành công của loạt iPhone 11, chiếm 7,4% tổng doanh số iPhone châu Âu trong suốt 3 tháng của quý bất chấp iPhone 11 chỉ được bán từ ngày 20.9. Cũng theo Kantar, iPhone 11 dẫn đầu về doanh số, mặc dù doanh số loạt iPhone 11 Pro không kém quá xa. <br> <br>Bên cạnh các thị trường châu Âu, Úc và Nhật Bản cũng chứng kiến sự tăng trưởng doanh số iPhone, với mức thị phần tương ứng là 39,6% (từ 35,5%) và 39,9% (từ 29,6%).<br> <br>Kantar cũng cho thấy iPhone 11 đã hoạt động khá tốt ở Trung Quốc nhưng sự cạnh tranh lớn từ các nhãn hiệu địa phương khiến thị phần Apple sụt giảm từ 18,9% xuống 17,6%. Điều tương tự cũng xảy ra tại Mỹ khi thị phần iPhone giảm xuống mức 36,1%, từ 38,1% của cùng kỳ năm ngoái. Được biết ở Trung Quốc, thị phần kết hợp của Huawei và Honor là 46,8%.<br> <br>Đáng chú ý, Kantar tuyên bố Samsung dẫn đầu với sự tăng trưởng mạnh mẽ ở các phân khúc tầm thấp đến tầm trung nhờ Galaxy A10e và Galaxy A20, trong khi loạt Pixel 3a và dòng giá rẻ của LG cũng hoạt động khá tốt. Bất chấp sự sụt giảm của thị trường, Samsung vẫn có tỷ lệ tăng trưởng mạnh ở châu Âu, biến công ty trở thành thương hiệu tăng trưởng nhanh nhất trong khu vực. Các sản phẩm của Samsung nằm trong top 10 điện thoại bán chạy nhất gồm Galaxy A50, Galaxy A40 và Galaxy A20e.",
			titleimg:"Dòng iPhone 11 thu hút người tiêu dùng châu Âu <br> Ảnh: Reuters",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
				{
			id:id++,
			title:"Khủng bố Hồi giáo dùng TikTok để dụ dỗ các cô gái trẻ",
			titlecontent:"Google đã giải thích lý do khiến công ty không mang khả năng quay video 4K 60 fps đến Pixel 4, điều mà hầu hết các OEM khác đã áp dụng trong smartphone cao cấp của mình.",
			image:"img/12.jpg",
			content:"Theo Neowin, mặc dù sở hữu nhiều tính năng hấp dẫn như màn hình OLED 90 Hz, camera kép ở mặt sau… nhưng việc thiếu khả năng quay video 4K 60 fps (khung hình/giây) trên Pixel 4 đã khiến nhiều người cảm thấy khá thất vọng. <br><br>Để giải quyết vấn đề, Google đã đăng tải trên tài khoản Made by Google của Twitter về hai lý do cho việc làm của họ. Đầu tiên, nó chiếm quá nhiều dung lượng lưu trữ. Thứ hai, mọi người chỉ sử dụng 1.080p, mặc dù điều đó có thể có liên quan đến 1.080p là lựa chọn mặc định trên hầu hết các thiết bị.<br><br>Ý tưởng về việc video 4K 60 fps chiếm quá nhiều không gian lưu trữ là rất đáng chú ý vì dòng Pixel 4 chỉ có cấu hình bộ nhớ trong 64 GB và 128 GB. Nếu không gian lưu trữ lớn hơn, có vẻ như vấn đề này sẽ được giải quyết rất dễ dàng.<br><br>Về việc phần lớn người dùng gắn bó với video 1.080p, điều này có thể đúng. Dẫu vậy, một chiếc điện thoại hàng đầu như Pixel 4 lại thiếu đi một tùy chọn để quay video 40K mà nhiều sản phẩm đối thủ có không phải là điều mà người hâm mộ dòng Pixel mong muốn.",
			titleimg:"Google pixel 4 <br> Ảnh: Reuters",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},

		// ghi chú
		{
			id:id++,
			title:"Apple mạnh tay chi 2,5 tỉ USD giải quyết khủng hoảng nhà ở tại Mỹ",
			titlecontent:"Khoản cam kết này khiến Apple trở thành công ty lớn tiếp theo gia nhập vào liên minh hỗ trợ nhà ở cho cuộc khủng hoảng tại bang California, Mỹ.",
			image:"img/congnghe1.jpg",
			content:"Theo TheVerge, Apple vừa tuyên bố đóng góp một khoản 2,5 tỉ USD để hỗ trợ giải quyết cuộc khủng hoảng nhà ở tại bang California của Mỹ và là khoản đóng góp lớn nhất trong nhóm 5 tập đoàn công nghệ hàng đầu tại Mỹ tham gia chiến dịch này. Theo đó, các công ty công nghệ lớn gồm Microsoft, Apple, Google, Facebook và Amazon đã cùng nhau cam kết sẽ chi các khoản tiền khác nhau để gây quỹ nhằm giúp chính quyền xây dựng các căn hộ giá rẻ ở trong và xung quanh thành phố mà các công ty này hoạt động. Hiện chỉ có Amazon chưa đưa ra cam kết về khoản tiền mà họ sẽ hỗ trợ, dù trước đó Amazon đã quyên góp 8 triệu USD cho các tổ chức phi lợi nhuận nhằm cung cấp nhà ở cho người vô gia cư tại Mỹ vào mùa hè vừa qua.<br><br>Tháng trước, Facebook cam kết chi 1 tỉ USD cho quỹ này, trong khi Google cũng cam kết dành số tiền tương tự hồi tháng 6. Microsoft có trụ sở ngay cạnh Seattle, hồi tháng 1 năm nay hãng cho biết sẽ chi 500 triệu USD để giảm bớt gánh nặng nhà ở cho các khu đô thị lớn của thành phố. Seattle đã phải chịu tình trạng quá tải của người nhập cư và thiếu các khu nhà ở giá rẻ, sau nhiều năm mức lương ở đây tăng cao nhưng sự phân bổ không đồng đều đã dẫn tới sự phân hóa lớn về thu nhập cũng như khả năng mua sắm tài sản.<br><br>Apple hiện có trụ sở tại Cupertino, ở ngoài San Jose và cách San Francisco chưa đến một giờ lái xe, công ty hiện có hơn 130.000 nhân viên và nhiều người trong số họ có mức lương cao, qua đó gián tiếp và trực tiếp góp phần đẩy mức giá bất động sản khỏi tầm với của nhiều người có mức thu nhập thấp ở Bắc California. Nên như CEO Tim Cook của Apple chia sẻ, “nhà ở giá rẻ có nghĩa là sự ổn định và nhân cách, cơ hội và niềm tự hào. Khi những điều này nằm ngoài tầm với của quá nhiều người, đó cũng là lúc chúng tôi nhận ra những gì mà mình đang theo đuổi là không bền vững và Apple cam kết sẽ là một phần của giải pháp này”.<br><br>Theo đó, Apple chia nhỏ khoản tiền mà họ cam kết thành hai quỹ lớn trị giá 1 tỉ USD cùng một loạt khoản đóng góp nhỏ khác cho nhiều vấn đề liên quan, bao gồm: Quỹ đầu tư nhà ở giá rẻ 1 tỉ USD dành cho tiểu bang California, quỹ hỗ trợ thế chấp cho người mua nhà lần đầu 1 tỉ USD nhằm hỗ trợ những người thu nhập thấp thanh toán trả góp, quyên góp lô đất thuộc sở hữu của Apple trị giá 300 triệu USD để xây dựng nhà ở giá rẻ, quỹ nhà ở 150 triệu USD cho Bay Area cho các đối tác để hỗ trợ các khoản vay và trợ cấp dài hại. Cuối cùng là khoản 50 triệu USD để hỗ trợ các khu vực dân số “dễ bị tổn thương”, những người bị đẩy tới bờ vực vô gia cư sau các cuộc tái cấu trúc ở Bắc và Nam California, góp phần tập trung vào các chiến lược chấm dứt và ngăn chặn tình trạng vô gia cư tại đây.",
			titleimg:"CEO Tim Cook (trái) của Apple đang bàn cách giảm thiểu khủng hoảng nhà ở với ông Gavin Newsom - Thống đốc bang California<br>Ảnh: Apple",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Nhóm hack Trung Quốc bị tố nhắm vào các chính phủ",
			titlecontent:"Một nhóm hack Trung Quốc được cho đã gây ra sự hỗn loạn cho các tổ chức chính phủ ở nhiều quốc gia khác nhau trong ba năm qua, dựa theo một báo cáo mới tiết lộ.",
			image:"img/1_lzvo.jpg",
			content:"Theo Engadget, được phát hiện bởi công ty bảo mật doanh nghiệp Positive Technologies, nhóm Calypso APT (hay Advanced Persistent Threat) hoạt động từ năm 2016 và đã nhắm mục tiêu vào các tổ chức nhà nước ở Ấn Độ, Brazil, Kazakhstan, Nga, Thái Lan và Thổ Nhĩ Kỳ.<br><br>Các cuộc tấn công hoạt động bằng cách hack hệ thống của tổ chức, sau đó sử dụng các tiện ích và phần mềm độc hại đặc biệt để có quyền truy cập vào mạng nội bộ. Khi vào bên trong, tin tặc có thể di chuyển qua hệ thống theo một trong hai cách: bằng cách khai thác lỗ hổng Remote Code Execution giúp thực thi mã từ xa hoặc sử dụng thông tin đăng nhập bị đánh cắp.<br><br>Với phương pháp này, nhóm tấn công đã có thể thành công khi gây thiệt hại cho các tổ chức chính phủ ở mọi quốc gia mà họ nhắm tới. Positive Technologies cho rằng sự thành công của nhóm này đó là vì chúng sử dụng các công cụ phổ biến rộng rãi được các chuyên gia khắp mọi nơi dùng để quản trị mạng. Nhóm này đã sử dụng các tiện ích công bố rộng rãi và các công cụ khai thác lỗ hổng như SysIternals, Mimikatz, EternalBlue và EternalRomance.<br><br>Positive Technologies tin rằng nhóm Calypso APT người Trung Quốc này sử dụng phần mềm độc hại PlugX, một công cụ yêu thích của các nhóm hack Trung Quốc, cũng như trojan. Ngoài ra, họ cũng phát hiện ra một số địa chỉ IP thực sự của các tin tặc được liên kết với các nhà cung cấp Trung Quốc.",
			titleimg:"Nhóm Calypso APT người Trung Quốc đã gây ra nhiều cuộc tấn công vào chính phủ ở 6 quốc gia trong suốt 3 năm<br>Ảnh: AFP",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Google không còn hỗ trợ cập nhật cho Pixel và Pixel XL bản gốc",
			titlecontent:"Sau hai năm thực hiện lời hứa cập nhật Android và ba năm cập nhật bảo mật, Google đã chính thức kết thúc vòng đời hỗ trợ loạt Pixel và Pixel XL gốc mà họ ra mắt vào năm 2016.",
			image:"img/pixel_rvvn.jpg",
			content:"Theo Neowin, Google bắt đầu tung ra bản vá bảo mật tháng 11.2019 cho các thiết bị Pixel của mình. Ngoài việc vá một số lỗ hổng nghiêm trọng, bản cập nhật còn mang đến những cải tiến liên quan đến máy ảnh và màn hình cho Pixel 4 và Pixel 4 XL. Tuy nhiên, công ty không tung ra các bản vá bảo mật tháng 11 cho các điện thoại Pixel và Pixel XL gốc, đánh dấu sự kết thúc vòng đời của sản phẩm này.<br><br>Với lịch trình hỗ trợ từ Google, Pixel và Pixel XL sẽ ngừng nhận bản cập nhật bảo mật sau tháng 9.2019, nhưng công ty vẫn tiếp tục hỗ trợ cập nhật các sản phẩm này vào tháng 10. Tương tự, bất chấp những lời hứa về bản cập nhật Android trong 2 năm kể từ khi phát hành, Google đã mở rộng sự hỗ trợ phần mềm cho các thiết bị với việc phát hành Android 10 cho chúng.<br><br>Google Pixel và Pixel XL được ra mắt cùng với Android 7.1 Nougat, nhận được ba bản cập nhật hệ điều hành Android lớn trước khi đến cuối đời sản phẩm. Dù vậy nó vẫn ấn tượng hơn so với hầu hết điện thoại Android khi chỉ hỗ trợ được 1 hoặc 2 bản cập nhật hệ điều hành trước khi bị các OEM bỏ rơi.<br><br>Nói về bản cập nhật tháng 11, đây là một bản vá bảo mật sửa chữa một số lỗ hổng được đánh giá ở các mức cao về độ nghiêm trọng. Đối với Pixel 4 và 4 XL, bản cập nhật cũng mang đến những cải tiến Smooth Display. Trên Pixel 4 XL, màn hình hiện chạy ở tần số quét 90 Hz không phụ thuộc vào mức độ sáng trong khi trên Pixel 4 nhỏ hơn, màn hình chuyển về 60 Hz khi độ sáng xuống dưới 42%. Đây là ngưỡng sạc trước đây đã được thiết lập ở mức 75%.<br><br>Google hứa tất cả điện thoại và thiết bị Pixel mới sẽ nhận được các bản cập nhật hệ điều hành và bảo mật trong ba năm kể từ khi phát hành.",
			titleimg:"Pixel và Pixel XL đã không nhận được bản vá bảo mật tháng 11 từ Google<br>Ảnh: AFP",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},

		{
			id:id++,
			title:"Facebook thử nghiệm công cụ nhận diện khuôn mặt",
			titlecontent:"Công cụ này sẽ hỗ trợ việc xác nhận danh tính người dùng, nhưng liệu họ sẽ cảm thấy thoải mái khi nhìn lại những bê bối về quyền riêng tư của Facebook?",
			image:"img/facebooknhandien_ixcx.jpg",
			content:"Theo Engadget, Jane Manchun Wong đã phát hiện một đoạn mã liên quan đến hệ thống nhận diện khuôn mặt bên trong ứng dụng Facebook của điện thoại, cho phép xác minh danh tính người dùng. Bạn phải quay một video “tự sướng” mà trong đó, phải nhìn theo nhiều hướng khác nhau để Facebook ghi nhận hoàn chỉnh khuôn mặt. Cách thức nó hoạt động gần giống như Face ID của Apple và một số hệ thống tương tự, nhưng không có bằng chứng cho thấy nó cần cảm biến chiều sâu.<br><br>Facebook hứa hẹn sẽ không có ai xem đoạn video đó và họ sẽ xóa sau 30 ngày, mặc dù mức độ bảo mật chưa cao bằng các hệ thống như Face ID (vốn không để lại dữ liệu trên thiết bị, và chỉ lưu lại đặc điểm khuôn mặt dưới dạng thuật toán máy tính).<br><br>Ngoài ra, Wong còn đề cập đến một quy trình mới về việc gửi ảnh ID của bạn để xác minh tài khoản. Rõ ràng, điều này ít phức tạp hơn khi bạn đơn giản chỉ cần chụp ảnh ID của mình trên một mặt phẳng, đủ ánh sáng và gửi nó.<br><br>Tuy nhiên, các đoạn mã như thế này không nhất thiết đảm bảo tính năng sẽ thực sự được phát hành - thỉnh thoảng chúng chỉ là thử nghiệm của bên cung cấp ứng dụng.<br><br>Nhưng nếu Facebook nghiêm túc muốn tích hợp tính năng nhận diện khuôn mặt, họ có thể gây ra tranh cãi. Công ty vẫn đang phải giải quyết các lo ngại về quyền riêng tư. Hệ thống nhận diện khuôn mặt có khả năng giảm thiểu nguy cơ tài khoản bị xâm phạm, nhưng cũng tạo cảm giác bất an rằng công ty có thể lạm dụng dữ liệu này hoặc xảy ra sự cố lộ dữ liệu, cho phép tin tặc tiếp cận thông tin nhạy cảm.",
			titleimg:"Đến lượt Facebook muốn áp dụng công nghệ nhận diện khuôn mặt<br>Ảnh: Jane Manchun Wong",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Loa thông minh dễ bị hack bằng tia laser",
			titlecontent:"Tin tặc có thể kiểm soát loa thông minh bằng cách chiếu tia laser vào chúng, từ đó ra lệnh mở cửa chính, khởi động xe...",
			image:"img/loathongminh_jgue.jpg",
			content:"Theo AndroidAuthority, các nhà nghiên cứu tại Đại học Michigan và Đại học Thông tin điện tử Tokyo đã thực hiện một loạt thí nghiệm và phát hiện một số loa thông minh của Google, Amazon, Facebook và Apple có khả năng bị hack bằng tia laser.<br><br>Nghe có vẻ kỳ lạ, nhưng họ chỉ cần dùng bộ thiết bị trị giá ít hơn 400 USD để kiểm soát loa thông minh từ xa. Thiết bị bị hack đã được ra lệnh để mở cửa ga-ra và thậm chí khởi động phương tiện di chuyển trong vài trường hợp.<br><br>Người dùng có thói quen đặt loa thông minh gần cửa sổ hoặc cửa ra vào nên kẻ tấn công không bị hạn chế tầm nhìn để thực hiện tấn công.<br><br>Microphone trên loa thông minh và một số smartphone sẽ chuyển âm thanh thành tín hiệu điện để thực hiện yêu cầu từ giọng nói người dùng. Nhưng thay vì âm thanh, kẻ tấn công mã hóa các câu lệnh trái phép thành một chùm tia laser.<br><br>Để hack thành công, tia laser cần được hướng vào microphone trên loa thông minh hoặc điện thoại. Điều này khiến microphone thu vào tín hiệu điện từ chùm tia laser. Ngay lập tức, kẻ tấn công có thể tắt/mở khả năng ra lệnh bằng giọng nói của thiết bị trong nhà hoặc mở cả cửa chính.<br><br>Các nhà nghiên cứu đã áp dụng cách này để kiểm soát hầu hết loa thông minh từ khoảng cách cỡ 50 mét. Nhưng với trợ lý ảo trên điện thoại (cả Android và iOS) thì họ gặp khó khăn hơn. Điện thoại Android chỉ có thể bị điều khiển từ khoảng cách 4,8 mét, nhưng với iPhone thì con số đó là 10 mét.<br><br>Nhiều thiết bị đã được sử dụng trong thí nghiệm và nhóm nghiên cứu nói chúng dễ bị tấn công bằng tia laser, bao gồm loa Google Home, Google Nest Cam IQ, các loa Amazon Echo, Echo Dot, Echo Show, thiết bị Portal Mini của Facebook, iPhone XR và iPad thế hệ 6.<br><br>Phát hiện của cuộc nghiên cứu có thể làm một lượng lớn người dùng, cũng như nhà sản xuất loa thông minh phải lo lắng. Trong 5 năm qua, thị trường loa thông minh đã tăng trưởng rất mạnh. Amazon đang dẫn đầu thị trường này. Trong quý 2/2019, họ đã bán ra 26,1 triệu sản phẩm.<br><br>Nhóm nghiên cứu phát biểu họ chưa gặp tình huống tấn công thực tế ngoài đời có áp dụng phương pháp chiếu laser này. Một cách để phòng trách là đảm bảo loa thông minh của bạn không bị người khác nhìn thấy từ bên ngoài.<br><br>Nhóm nghiên cứu cũng nói rằng vấn đề không thể hoàn toàn được xử lý nếu không thiết kế lại microphone, chính xác hơn là MEMS microphone vì chúng được tích hợp trực tiếp vào thiết bị. Và điều này lại vô cùng phức tạp.<br><br>Họ cho biết đã liên lạc với Google, Apple, Amazon và một số bên khác để thông báo phát hiện. Đại diện của Google và Amazon nói hai công ty đang xem xét bài nghiên cứu. Apple từ chối bình luận.",
			titleimg:"Cách hack này khiến nhiều người lo lắng vì loa thông minh đang rất phổ biến<br>Ảnh: AndroidAuthority",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
				{
			id:id++,
			title:"FPT Shop: Bộ ba iPhone 11 chính hãng 'cháy hàng' tại Việt Nam",
			titlecontent:"Bắt đầu từ ngày 1.11, loạt iPhone 11 chính hãng đã được mở bán tại Việt Nam, và chỉ sau 4 ngày mở bán loạt sản phẩm này đang có sức mua tăng trưởng mạnh hơn so với cùng kỳ năm ngoái.",
			image:"img/iphone_jlwg1.jpg",
			content:"Theo chia sẻ của hệ thống bán lẻ FPT Shop, tính đến hết ngày 31.10, đơn vị này nhận được hơn 12.300 đơn đặt hàng mua iPhone 11, 11 Pro, 11 Pro Max chính hãng tại hệ thống FPT Shop và F.Studio by FPT trên toàn quốc. Sau đó, khi bắt đầu mở bán loạt iPhone 11 chính hãng đã nhận được sức mua lớn từ người dùng.<br><br>“Ban đầu, chúng tôi chỉ kỳ vọng mức tăng trưởng khoảng 20% so với năm 2018 nhưng chỉ sau 4 ngày mở bán, tốc tộ tăng trưởng đạt gấp đôi và cửa hàng nào cũng bán được gấp đôi so với năm trước, khá đồng đều trên toàn quốc. Đặc biệt, chỉ trong những ngày đầu mở bán, FPT Shop đã dốc toàn lực, mỗi giờ giao 400 máy đến tay khách hàng, ước tính doanh thu đạt 400 triệu đồng/shop”, bà Nguyễn Đỗ Quyên - Giám đốc điều hành FPT Shop chia sẻ.<br><br>Hiện bộ ba iPhone 11, 11 Pro và 11 Pro Max có mức giá bán ra từ 21,99 triệu đồng. Theo đó, iPhone 11 Pro Max với 2 phiên bản 64 GB và 256 GB là sản phẩm được người dùng ưa chuộng nhất với tỷ lệ bán ra đến 70%, trong khi đó iPhone 11 và 11 Pro chiếm tỷ lệ lần lượt là 20% và 10%.<br><br>“Có nhiều nguyên nhân dẫn đến con số ấn tượng này. Ngoài những nâng cấp đáng giá trên chiếc iPhone mới như camera, pin và vi xử lý Bionic A13… thì mức giá hợp lý đi cùng với ưu đãi độc đáo là 2 năm bảo hành, trả góp 0%, hoàn tiền 1 triệu đồng, cơ hội trúng 222 Apple Watch và AirPods... là điều mà khách hàng rất quan tâm , ông Nguyễn Việt Anh, Phó tổng giám đốc FPT Shop cho biết.<br><br>Hiện tại, do Apple đang siết lại quy định bảo hành các sản phẩm của nhà táo, nên việc chọn mua hàng chính hãng cũng là một trong những nguyên nhân mà ngày càng nhiều người tìm đến đại lý ủy quyền cao cấp nhất của Apple.<br><br>Với những sản phẩm chính hãng của Apple được bán ở Việt Nam, máy sẽ có mã là VN/A và có tem nhập khẩu là Công ty TNHH Apple Việt Nam.<br><br>Được biết, nổi bật nhất trong loạt sản phẩm vừa ra mắt của Apple là mẫu iPhone 11 Pro và 11 Pro Max, đây cũng là những mẫu iPhone đầu tiên được trang bị hệ thống 3 camera của Apple. Cả ba camera đều có độ phân giải 12 megapixel, trong đó camera chính có khẩu độ f/1.8, camera tele có khẩu độ f/2.4 và camera góc siêu rộng có khẩu độ f/2.0. Sản phẩm hỗ trợ zoom quang học 2x.<br><br>Về khả năng quay video, cả ba camera trên bộ đôi sản phẩm đều hỗ trợ quay video chuẩn 4K ở tốc độ 60 khung hình/giây. Người dùng có thể dễ dàng chuyển đổi giữa các ống kính trong khi đang quay video. Đặc biệt, người dùng có thể chụp ảnh hoặc quay phim đồng thời bằng 2 ống kính trên iPhone.<br><br>Về cấu hình, máy sử dụng bộ vi xử lý A13 Bionic 7nm với 8,5 tỉ bóng bán dẫn và nhanh hơn 20%. Nó hoạt động hiệu quả hơn nhờ 4 lõi tiết kiệm điện năng, giúp kéo dài thời gian sử dụng thêm 4 giờ với iPhone 11 Pro và 5 giờ với iPhone 11 Pro Max khi so sánh với tiền nhiệm.",
			titleimg:"Loạt iPhone 11 chính hãng đang có sức mua mạnh tại Việt Nam<br>Ảnh: T.Luân",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},

		//ghi chú
	],
	giaoduc1: [
		{
			id:id++,
			title:"Đổi mới giáo dục không chờ đến khi có sách giáo khoa mới",
			titlecontent:"Trong quá trình tập huấn, bồi dưỡng giáo viên cốt cán, câu hỏi thường gặp là bao giờ có sách giáo khoa mới? Tuy nhiên, thực tế đã chứng minh có nhiều cách thay đổi trong quá trình dạy học mà không cần chờ có sách giáo khoa.",
			image:"img/giaoduc1.jpg",
			content:"Thói quen coi trọng sách giáo khoa (SGK) là chưa thể bỏ ngay, tuy nhiên, nhiều nhà trường đã chủ động thực hiện những mô hình, phương pháp dạy học mới.<br><br>Ông Văn Đức Phương, Hiệu trưởng Trường THCS Quang Trung, H.Bảo Lâm, Lâm Đồng, khẳng định: “Mô hình trường học mới mà nhà trường thực hiện 5 năm nay đều thể hiện trong chương trình giáo dục phổ thông sắp triển khai nên chúng tôi sẽ không bỡ ngỡ, lo lắng. Mô hình này là tiền đề để chuẩn bị cho chương trình giáo dục phổ thông mới khi đã đưa vào dạy học tích hợp, phát triển năng lực của học sinh”.<br><br>Tất nhiên, đổi mới ấy không phải dễ dàng. Những trường thực hiện thành công đều cho hay quá trình ấy là cực kỳ gian khổ và đòi hỏi sự kiên trì. Khi phụ huynh phản ứng, lãnh đạo nhiều trường ở Lâm Đồng phải mời phụ huynh đến dự giờ, giờ thăm lớp. “Tất cả những thay đổi ấy nếu chờ SGK mới ra đời mới thực hiện thì sẽ không thể tránh khỏi lo lắng và lúng túng”, ông Văn Đức Phương nói.<br><br>Ông Trần Đức Lợi, Phó giám đốc Sở GD-ĐT Lâm Đồng, cho biết toàn tỉnh có khoảng 62% trường tiểu học và gần 20% trường THCS đang triển khai mô hình trường học mới. Nhận thấy đổi mới sắp tới tương đồng với mô hình này nên năm nay, trong văn bản hướng dẫn nhiệm vụ năm học, ngành có chỉ đạo cứng là tất cả các trường dù không thực hiện mô hình này thì đều phải áp dụng những thành tố tích cực nhất của mô hình để tạo tiền đề khi triển khai chương trình mới.<br><br>Việc tập huấn, bồi dưỡng giáo viên dạy chương trình mới cũng đã và đang không theo bất cứ bộ SGK nào. Ông Lưu Trang, Hiệu trưởng Trường ĐH Sư phạm Đà Nẵng, đơn vị chịu trách nhiệm tập huấn và bồi dưỡng giáo viên cốt cán ở khu vực miền Trung, Tây nguyên, cho biết: “Việc không lệ thuộc vào SGK, chấm dứt coi SGK là “pháp lệnh” là xu hướng tất yếu”.",
			titleimg:"Giáo viên cốt cán của tỉnh Lâm Đồng tham gia khóa tập huấn đầu tiên về chương trình giáo dục phổ thông mới<br>TUỆ NGUYỄN",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},

	],
	giaoduc: [
		{
			id:id++,
			title:"Đổi mới... y chang mô hình đã thực hiện nhiều năm qua?",
			titlecontent:"Ngành GD-ĐT đang rầm rộ chuẩn bị cho một cuộc 'đổi mới căn bản, toàn diện' giáo dục phổ thông.",
			image:"img/giaoduc2.jpg",
			content:"Nào là ban hành chương trình giáo dục; biên soạn, thẩm định, phê duyệt sách giáo khoa mới; nào tập huấn, bồi dưỡng đội ngũ giáo viên, nào ban hành danh mục thiết bị tương ứng với chương trình giáo dục phổ thông mới... cái gì cũng có văn bản mới, hướng dẫn mới, kinh phí mới…<br><br>Dư luận “nín thở” đón từng thông tin để biết con em họ sẽ được học theo nội dung mới, phương pháp mới ra sao… Qua cách truyền thông của những người làm chương trình và tác giả viết sách giáo khoa và cả cơ quan làm chính sách GD-ĐT, rất nhiều người nghĩ đổi mới lần này như một cuộc cải cách về giáo dục, học sinh sẽ được học những cái trước đây chưa từng được học, theo những cách chưa từng có ở nền giáo dục VN.<br><br>Tuy nhiên, thực tế không hoàn toàn như vậy. Đến nhiều cơ sở giáo dục mới thấy những mô hình mà lâu nay ngành GD-ĐT triển khai thực ra mục tiêu, tính chất không có gì khác biệt đáng kể so với mục tiêu lần đổi mới này đang hướng đến. Chỉ có điều, hết dự án, hết chương trình và quan trọng là hết nhiệm kỳ quản lý… những mô hình ấy vốn được đánh giá rất tốt, rất ưu việt… “bỗng dưng” nảy sinh rất nhiều bất cập; thậm chí bị phản đối cũng rầm rộ không kém gì việc ca tụng lúc triển khai. Điển hình là mô hình trường học mới, vài năm gần đây những thông tin kiểu như “phụ huynh kéo đến trường phản đối” hay tỉnh A, tỉnh B đang từ chỗ gần 100% trường thực hiện thì quyết định dừng lại hoàn toàn. Cùng thời điểm đó, ngành GD-ĐT công bố chương trình giáo dục phổ thông mới khiến dư luận xã hội thực sự hoang mang thở dài: “Lại một lứa học sinh bị làm chuột bạch và thí nghiệm bất thành”.<br><br>Nhưng bản chất câu chuyện không phải như vậy, cuối tháng 10 vừa qua, phóng viên Thanh Niên có dịp đến một loạt trường học ở các huyện khó khăn của một số tỉnh Tây nguyên mới thấy nếu kiên trì và không phủ nhận những cái mới khi hết dự án, hết tiền, hết nhiệm kỳ thì các thầy cô ấy, nhà trường ấy và cả địa phương ấy hoàn toàn có thể tự tin đón nhận lần thay sách này mà không phải hoang mang với hàng loạt câu hỏi đổi mới thế nào. Thầy Văn Đức Phương, Hiệu trưởng Trường THCS Quang Trung, H.Bảo Lâm, Lâm Đồng, nói: Nhà trường thực hiện mô hình trường học mới cách đây 5 năm, phụ huynh và học sinh nghe tin sắp tới “lại” thay đổi, họ rất lo lắng. “Sau khi nghiên cứu chương trình và qua vài đợt tập huấn tôi thấy về bản chất, đổi mới chương trình giáo dục phổ thông sắp tới là… y chang mô hình trường học mới đã làm nhiều năm qua. Do vậy, chúng tôi phải thường xuyên tuyên truyền cho học sinh, phụ huynh nắm rõ, không phân vân”, thầy Phương nói.<br><br>Còn một vị Phó trưởng phòng GD-ĐT H.Bảo Lâm thì cho rằng tâm lý ngại thay đổi của giáo viên cũng là nguyên nhân khiến mô hình dạy học mới ở một số nơi thất bại hoặc phải dừng giữa chừng.<br><br>Những hoang mang của giáo viên và phụ huynh, học sinh đang thực hiện các mô hình mới khi liên tục nhận chỉ đạo tiếp tục thay đổi là có thật. Họ cũng như xã hội có quyền mong muốn ngành GD-ĐT khi quyết định đưa vào thực hiện những mô hình giáo dục mới và nhận thấy đổi mới ấy là tích cực thì cần kiên trì và đồng hành với cơ sở giáo dục trong thực hiện.<br><br>Đổi mới giáo dục đòi hỏi một quá trình lâu dài chứ không thể theo “tuổi thọ” của một dự án hoặc nhiệm kỳ bộ trưởng hay lãnh đạo địa phương.",
			titleimg:"Nhiều ý kiến cho rằng những thay đổi trong chương trình giáo dục phổ thông sắp tới là... quay lại những mô hình cũ, chẳng hạn như mô hình trường học mới<br>Tuệ Nguyễn",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Chia sẻ cùng thầy cô: Tấm gương giữa đại ngàn",
			titlecontent:"Đoàn công tác chương trình 'Chia sẻ cùng thầy cô' đã đến thăm cô giáo Trần Thị Thúy Ngân và Trần Thị Bá Tiền - những tấm gương tiêu biểu dạy học sinh dân tộc thiểu số được tuyên dương trong chương trình ý nghĩa này.",
			image:"img/giaoduc3.png",
			content:"Cô giáo Trần Thị Bá Tiền (35 tuổi) dạy Trường phổ thông dân tộc bán trú tiểu học Hà Đông (xã Hà Đông, H.Đắk Đoa, Gia Lai) kể năm 2014, cô “đậu” biên chế ở H.Đắk Đoa và được tuyển dụng làm giáo viên dạy âm nhạc tại trường nói trên. Ngày đầu tiên khi biết mình trúng tuyển và được đi dạy, cô Tiền mừng rỡ vì ước mơ lâu nay trở thành hiện thực. Nghe xong quyết định, biết mình dạy ở ngôi trường cách nhà 130 km, cô Tiền không khỏi hoang mang.<br><br>“Lúc đầu vợ chồng tôi rất băn khoăn, lo lắng và e ngại về quãng đường xa. Nhưng tình yêu nghề với ước mơ cháy bỏng được đứng trên bục giảng nên tôi quyết định phải đi dạy và được gia đình đồng thuận”, cô Tiền chia sẻ.<br><br>Vậy là hai vợ chồng cô Tiền chở nhau đi hỏi đường, cùng tìm về Trường phổ thông dân tộc bán trú tiểu học Hà Đông. Đường đi càng lúc càng vào sâu trong rừng, không một bóng người dân để hỏi thăm. Nhưng lúc đến nơi, được đồng nghiệp, học sinh chào đón và hỏi thăm rất ân cần, tình cảm nên mọi lo lắng đều tan biến… Thế là đã 5 năm cô Tiền cảm thấy yêu quý, có trách nhiệm gắn bó với ngôi trường này.<br><br>Có một chuyện không may đã ập đến với cô Tiền. Đó là một ngày tháng 9.2019, như thường lệ, cô Tiền thức dậy từ 3 giờ sáng chuẩn bị đồ đạc để đến trường, khi băng qua con đường dài nhỏ hẹp đầy ổ gà, cô không may gặp tai nạn từ chiếc xe tải chở sắn. Tai nạn lần ấy đã cướp mất đi cánh tay trái của cô giáo. Các bác sĩ, người thân và cả bản thân cô vô cùng đau xót, nhưng vẫn phải phẫu thuật cắt bỏ, vì đó là cách duy nhất cứu sống cô lúc bấy giờ.<br><br>Là một giáo viên dạy âm nhạc, lúc nào cô cũng tìm ra những phương pháp dạy học sinh động nhất để các em dễ dàng cảm thụ những giai điệu, ca từ. Tiếng cười giòn tan không thể thiếu trong những tiết học của cô Tiền.",
			titleimg:"Lúc nào cô Tiền cũng tìm ra những phương pháp dạy học gần gũi với học sinh<br>Ảnh: Thảo Ly",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},

		{
			id:id++,
			title:"Học xác suất và thống kê từ lớp 2: Học sinh sẽ học nội dung gì?",
			titlecontent:"Nhiều chuyên gia cho rằng việc học xác suất và thống kê ngay từ lớp 2 chứng tỏ môn toán trong chương trình giáo dục phổ thông mới có nhiều điều chỉnh bài bản và tích cực.",
			image:"img/giaoduc4.jpg",
			content:"Thông tin môn toán trong chương trình giáo dục phổ thông (GDPT) mới, học sinh từ lớp 2 sẽ học xác suất và thống kê đang khiến dư luận tranh luận sôi nổi. Tuy nhiên, theo nhiều chuyên gia, đừng vội phê phán mà cần phải biết học sinh sẽ học nội dung gì.<br><br>Theo nội dung và yêu cầu cần đạt môn toán lớp 2 trong chương trình GDPT mới, một số yếu tố thống kê sẽ là: thu thập, phân loại, sắp xếp các số liệu (làm quen việc thu thập, phân loại, kiểm đếm các đối tượng thống kê trong một số tình huống đơn giản; đọc biểu đồ tranh (đọc và mô tả được các số liệu ở dạng biểu đồ tranh); nhận xét về các số liệu trong biểu đồ tranh (nêu được một số nhận xét đơn giản về biểu đồ tranh). <br><br>Nội dung một số yếu tố xác suất là làm quen với các khả năng xảy ra có tính ngẫu nhiên của một sự kiện. Yêu cầu cần đạt của nội dung này là làm quen với việc mô tả những hiện tượng liên quan tới các thuật ngữ: có thể, chắc chắn, không thể thông qua một vài thí nghiệm, trò chơi hoặc xuất phát từ thực tiễn.<br><br>Những hoạt động thực hành và trải nghiệm kèm theo các nội dung này sẽ là thực hành các kiến thức toán học vào thực tiễn. Chẳng hạn như thực hành, tính toán và ước lượng độ dài, khối lượng, dung tích một số đồ vật trong thực tiễn; thực hành đọc giờ, xem lịch; thực hành sắp xếp thời gian biểu học tập và sinh hoạt của cá nhân hằng ngày, trong tuần...; thực hành thu thập phân loại, ghi chép, kiểm đếm một số đối tượng thống kê trong trường, lớp.<br><br>Ngoài ra, một dạng hoạt động khác là tổ chức các hoạt động ngoài giờ chính khóa (ví dụ trò chơi học toán hoặc các hoạt động học vui - vui học liên quan đến ôn tập, củng cố các kiến thức cơ bản.<br><br>Như vậy, những nội dung của xác suất, thống kê trong môn toán lớp 2 không quá phức tạp mà với mục đích để học sinh làm quen về kiến thức lĩnh vực này.Theo GS Đỗ Đức Thái, chủ biên môn toán trong chương trình GDPT mới, về nội dung, chương trình môn toán xoay quanh ba mạch kiến thức: Số, đại số và một số yếu tố giải tích; Hình học và đo lường; Thống kê và xác suất. Chương trình được thực hiện tích hợp liên môn thông qua các nội dung, chủ đề liên quan hoặc các kiến thức toán học được khai thác, sử dụng trong các môn học khác như vật lý, hoá học, sinh học, địa lý, tin học, công nghệ, lịch sử, nghệ thuật,... Chương trình môn toán còn thực hiện tích hợp nội môn và liên môn thông qua các hoạt động thực hành và trải nghiệm trong giáo dục toán học.<br><br>Theo GS Thái, các nội dung dạy môn toán cho học sinh lớp 2 cũng chỉ nằm trong Giai đoạn giáo dục cơ bản (lớp 1 - 9), giúp học sinh nắm được một cách có hệ thống các khái niệm, nguyên lý, quy tắc toán học cần thiết nhất cho tất cả mọi người, làm nền tảng cho việc học tập ở các trình độ học tập tiếp theo hoặc có thể sử dụng trong cuộc sống hằng ngày. Giai đoạn giáo dục định hướng nghề nghiệp (lớp 10 - 12) giúp học sinh có cái nhìn tương đối tổng quát về toán học, hiểu được vai trò và những ứng dụng của toán học trong thực tiễn, những ngành nghề có liên quan đến toán học để học sinh có cơ sở định hướng nghề nghiệp, cũng như có khả năng tự mình tìm hiểu những vấn đề có liên quan đến toán học trong suốt cuộc đời... ",
			titleimg:"Học sinh lớp 2 học xác suất và thống kê có quá nặng?<br>Ảnh minh họa: Ngọc Dương",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},

	],
	taichinh: [
		{
			id:id++,
			title:"Đi tìm 3 yếu tố mấu chốt của dự án hạng sang đúng nghĩa tại TP.HCM",
			titlecontent:"Một kiến trúc sư nổi tiếng với những công trình thế kỷ của Việt Nam đánh giá: Số dự án căn hộ hạng sang đúng nghĩa tại TP.HCM chỉ đếm chưa hết 5 ngón tay.",
			image:"img/kinhdoanh.png",
			content:"Theo vị kiến trúc sư này, các tiêu chí chính để các chủ đầu tư gắn mác hạng sang vào dự án là mức giá hàng trăm triệu đồng mỗi m2, tiện ích phong phú và vị trí đẹp nằm ở quận 7, quận 2 hoặc khu trung tâm quận 1 và quận 3.<br><br>Tuy nhiên, để khẳng định một dự án là hạng sang, thì ngoài vị trí đẹp, giá cao, trải nghiệm đắt giá, tiện ích phong phú, căn hộ 3-4 mặt tiền, thang máy riêng từng căn hộ thì các dự án này phải thỏa mãn được tính giới hạn về số lượng, sự riêng tư về không gian sống và mỗi sản phẩm phải là một tác phẩm nghệ thuật độc bản mang đậm dấu ấn cá nhân.<br><br>Đầu tiên, tính hạn hữu về số lượng là yếu tố mấu chốt của một dự án căn hộ hạng sang. Những dự án này chỉ được phép có vài chục sản phẩm giá trị cao, mang tính độc đáo. Tính hạn hữu về số lượng này sẽ khiến cho sản phẩm không bị đại trà hóa, giá trị ngày càng cao, và chỉ có giới tinh hoa mới có thể sở hữu được.<br><br>Thứ hai, các dự án hạng sang phải đảm bảo được tính đồng nhất về cộng đồng và tính riêng tư trong cuộc sống. Điều này sẽ được đảm bảo ở những dự án phát triển theo phiên bản giới hạn.<br><br>Sẽ không thể chấp nhận một hồ bơi với vài chục người bơi lội; công viên buổi sáng chật cứng người đứng, người ngồi hay hầm xe quá tải…<br><br>Cuối cùng, tính độc bản cá nhân hóa (Bespoke) được đánh giá quan trọng nhất để định vị một dự án thuộc phân khúc siêu sang. Với số lượng chỉ vài chục căn, giá trị lớn, chủ của các căn hộ thuộc các dự án này có thể yêu cầu các kiến trúc sư của chủ đầu tư ngồi cùng mình trong suốt một thời gian dài, để nắm được sở thích, phong cách sống của chủ căn hộ và thiết kế lên những sản phẩm giàu tính cá nhân của gia chủ.<br><br>Quý IV/2019, dự án căn hộ siêu sang ở trung tâm quận 2 được giới thiệu ra thị trường. Dự án này cao 24 tầng, nhưng toàn dự án chỉ có 84 căn hộ (194 - 295 m2) với 4 căn hộ/tầng, tất cả các căn hộ thuộc dự án này đều có thang máy đến tận cửa, có sân vườn hoặc hồ bơi riêng. Đặc biệt, 100% căn hộ tại dự án này đều là căn góc với 2 mặt tiền.<br><br>Nếu như dự án tại quận 2 là căn hộ hạng sang đẳng cấp tại khu Đông, thì Panomax River Villa được xem như căn hộ đẳng cấp bậc nhất khu Nam. Các block căn hộ của Panomax River Villa đều có số lượng rất hạn hữu 83 căn. Mỗi căn hộ tại Panomax River Villa đều có một thang máy riêng tiếp cận tận cửa cùng lối thoát hiểm riêng biệt. Cư dân sống tại đây sẽ không bao giờ gặp phải cảnh quá tải thang máy hay chờ quá lâu giờ cao điểm. Chỗ để xe hơi tại dự án này cũng được đảm bảo tỷ lệ 1:1 cho các chủ nhân căn hộ.<br><br>Panomax River Villa còn trang bị hệ thống quét Face ID từ hàng rào bảo vệ bên ngoài đến sảnh thang máy. Đặc biệt tại sảnh thang máy, hệ thống trí tuệ nhân tạo thông minh sẽ nhận diện gương mặt, tự động chọn tầng và đưa cư dân về căn hộ. Người lạ sẽ không bao giờ có thể tự ý đột nhập vào nhà của mỗi cư dân.",
			titleimg:"Dự án căn hộ hạng sang tại TP.HCM hiện nay rất ít triển khai",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Giá cà phê bất ngờ tăng mạnh",
			titlecontent:"Giá cà phê tại khu vực vùng nguyên liệu Tây nguyên sáng nay bất ngờ tăng đến 700 đồng/kg, lên đỉnh 33.000 đồng/kg. Giá cà phê trên sàn quốc tế cũng tăng gần 3%.",
			image:"img/kinhdoanh1.jpg",
			content:"Cụ thể, trên sàn trong nước, giá cà phê hôm nay (6.11) ở khu vực Tây nguyên tiếp tục tăng 700 đồng/kg, dao động từ 32.600 - 33.000 đồng/kg. Cao nhất là cà phê tỉnh Kon Tum với 33.000 đồng/kg và thấp nhất ở Lâm Đồng với 32.300 đồng/kg. Trong khi đó, giá cà phê giao tại cảng TP.HCM tăng 300 đồng/kg, lên ngưỡng 34.200 đồng/kg.<br><br>Trên sàn London, giá cà phê robusta giao tháng 11.2019 tăng 33 USD/tấn, tương đương 2,53%, lên mức 1.339 USD/tấn; giao tháng 1.2020 tăng 30 USD/tấn, tương đương 2,26%, lên mức 1.339 USD/tấn; giá cà phê giao tháng 3.2020 tăng 32 USD/tấn, tương đương 2,38%, lên mức 1.374 USD/tấn. Trên sàn New York, giá cà phê arabica giao tháng 12.2019 tăng 2,15 USD/tấn, tương đương 2,07% lên mức 1.058 USD/tấn; giá giao tháng 3.2020 tăng 2,20 USD/tấn, tương đương 2,05%, lên mức 1.094 USD/tấn.<br><br>Kết thúc phiên giao dịch cuối tuần qua, giá cà phê robusta trên sàn London chững lại, hàng giao ngay tháng 1.2020 tăng 33 USD/tấn, ở mức 1.339 USD/tấn. Giao tháng 3 tăng thêm 30 USD, lên 1.356 USD/tấn. Nói chung mức tăng nhẹ và khối lượng giao dịch trên mức trung bình. Ngược lại, giá cà phê arabica trên sàn New York lại tăng liên tiếp 3 phiên. Hàng giao ngay tháng 12.2019 tăng thêm 2,15 cent/lb, lên 105.80 cent/lb và kỳ hạn giao tháng 3 tăng thêm 2,0 cent/lb, lên 109,45 cent/lb.<br><br>Theo Tổ chức Cà phê quốc tế (ICO), niên vụ 2018 - 2019, cà phê toàn cầu dư tới 8 triệu bao (loại 60 kg), tương đương 5% tổng sản lượng toàn cầu. Theo chuyên gia xuất khẩu cà phê, giá cà phê toàn cầu giảm do nguồn cung dư thừa và tăng trưởng kinh tế toàn cầu chậm lại. Theo nhận định của một thành viên Hiệp hội Cà phê Ca cao Việt Nam, giá cà phê đang ở mức tốt, người trồng có lãi cho dù không quá cao, chỉ khi hàng về dưới mức 30.000 đồng/kg là lỗ đáng báo động.<br><br>Ngoài ra, Cục Xuất nhập khẩu (Bộ Công thương) mới đây có cảnh báo Brazil sẽ sớm vượt mặt Việt Nam thành nước xuất khẩu cà phê robusta lớn nhất thế giới. Trước đó, truyền thông quốc tế đưa tin, trong vài tháng gần đây, cà phê robusta từ Brazil được nhập vào châu Âu tăng mạnh.",
			titleimg:"Giá cà phê trong nước và quốc tế đồng loạt tăng<br>Ng.Ng",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"TP.HCM làm gì để thoát ngập?",
			titlecontent:"Chưa biết 30 - 50 năm nữa miền Nam VN có “chìm” thật hay không nhưng thực tế, tình trạng ngập lụt tại TP.HCM và ĐBSCL đang diễn ra ngày càng nghiêm trọng.",
			image:"img/kinhdoanh2.jpg",
			content:"Những ngày qua, dư luận liên tục chứng kiến nhiều cuộc tranh luận giữa các nhà khoa học và cả cơ quan nhà nước xoay quanh vấn đề: Đến 2050, phần lớn miền Nam VN có thật sự bị nước biển nhấn chìm, như dự báo mới nhất của Tổ chức khoa học Climate Central hay không.<br><br>Trong khi các cơ quan chức năng lên tiếng phủ nhận kịch bản giả định của Climate Central, khẳng định chưa đủ cơ sở khoa học, chồng chéo các hiện tượng cực đoan đẩy nguy cơ rủi ro tăng cao, thì một số chuyên gia lại cho rằng những con số nghiên cứu là đáng tin cậy, thậm chí quá trình ngập lụt có thể còn diễn ra sớm hơn so với dự báo.<br><br>Dù quan điểm khác nhau nhưng hầu hết các ý kiến đều gặp nhau ở một điểm: Đây là lời cảnh báo mà các nhà lãnh đạo cần đặc biệt quan tâm trong quá trình xây dựng các phương án quy hoạch TP.HCM cũng như khu vực ĐBSCL. Vấn đề sụt lún, nước biển dâng và ngập lụt thật sự là vấn đề nguy cấp và phải được nhìn nhận một cách nghiêm túc.<br><br>Thực tế, tại TP.HCM, chưa kịp qua mùa mưa, người dân TP lại phải gồng mình chống chọi với mùa triều. Nhìn lại khoảng 1 thập niên qua, thủy triều tại TP.HCM đang có xu hướng ngày càng lên cao, năm sau “đè” năm trước. Cụ thể, tháng 10.2013, lần đầu tiên TP.HCM đón đợt triều cao chạm mốc 1,68 m. 1 năm sau, tháng 10.2014 đỉnh triều 1,68 m tiếp tục lặp lại và ngay sau đó xác lập kỷ lục mới 1,70 m vào tháng 12. Đến 2017, mực nước triều dâng tại TP.HCM lên tới 1,72 m và chính thức cán mốc 1,80 m vào tháng 9 vừa qua. Tương tự, ĐBSCL cũng là khu vực đang chịu ảnh hưởng nặng nề do biến đổi khí hậu kéo theo thiên tai dị thường. Chỉ trong vòng 3 tháng, các tỉnh, thành hạ nguồn ĐBSCL phải hứng chịu liên tiếp 2 đợt nước rút, nước lên kỷ lục làm xáo trộn đời sống người dân. Giữa tháng 7, khi Ủy hội Sông Mê Kông quốc tế xác nhận rằng mực nước đầu mùa lũ tháng 6, tháng 7 năm nay trên dòng Mê Kông đang ở mức thấp nhất trong vòng 100 năm, thì cũng là lúc mực nước ở ĐBSCL của VN rút xuống mức rất thấp so với cùng kỳ. Chờ mãi nước không về, nhưng chỉ 2 tháng sau, các đô thị hạ nguồn lại hứng chịu trận ngập kinh hoàng nhất trong 30 năm qua.<br><br>Chưa tính đến nước biển dâng, quá trình đô thị hóa và các hoạt động khai thác nước ngầm không kiểm soát diễn ra ồ ạt thời gian qua cũng đang tự nhấn chìm TP.HCM và một số tỉnh ĐBSCL. Kết quả đo đạc của Bộ TN-MT tại 347 mốc đo từ năm 2005 - 2017 ở TP.HCM cho thấy TP đang lún biến đổi từ 1,1 - 81,4 cm, trung bình 23,27 cm, tốc độ lún từ 0,09 - 6,78 cm/năm (trung bình 1,99 cm/năm).<br><br>Với tất cả những “con số biết nói” trên, rõ ràng ngập lụt hay thậm chí một số khu vực có thể biến mất trong tương lai hoàn toàn không chỉ còn là nguy cơ.",
			titleimg:"Ngập trên đường Nguyễn Hữu Cảnh, Q.Bình Thạnh, TP.HCM<br>Ảnh: Ngọc Dương",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Vàng lao dốc",
			titlecontent:"Giá vàng miếng SJC ngày 6.11 giảm mạnh 250.000 đồng/lượng so với giá chiều 5.11.",
			image:"img/kinhdoanh3.jpg",
			content:"Mỗi lượng vàng miếng SJC được Tập đoàn Doji mua vào còn 41,55 triệu đồng, bán ra 41,75 - 41,79 triệu đồng. Giá mua vàng nhẫn 4 số 9 của đơn vị này ở mức 41,55 triệu đồng/lượng, bán ra 41,95 triệu đồng/lượng. Giá mua vàng miếng tại Công ty vàng bạc đá quý Sài Gòn - SJC giảm còn 41,53 triệu đồng/lượng, bán ra còn 41,8 - 41,82 triệu đồng/lượng...<br><br>Kim loại quý đã không trụ vững trên mức 1.500 USD/ounce và bốc hơi 25 USD/ounce chỉ trong một đêm. Từ mức 1.505 USD/ounce, giá vàng thế giới trượt giảm nhanh về mức 1.479 USD/ounce trong đêm 5.11 và sáng 6.11 hồi phục nhẹ lên mức 1.487 USD/ounce (giảm 18 USD/ounce so với đêm 5.11).<br><br>Các thông tin thương mại giữa Mỹ và Trung Quốc tốt lên đã làm USD tăng giá kéo vàng giảm. Thông tin Tổng thống Mỹ Donald Trump đang cân nhắc bỏ hàng rào thuế quan thực hiện hồi tháng 9 đối với 112 tỉ USD hàng hóa nhập khẩu từ Trung Quốc như quần áo, đồ gia dụng… ở mức thuế 15%. Đây là yêu cầu từ phía Trung Quốc về việc dỡ bỏ thuế quan, còn phía Mỹ muốn Trung Quốc nâng cao các điều khoản về bảo vệ sở hữu trí tuệ cho các công ty Mỹ và muốn chắc chắn hơn về quy mô mua nông sản Mỹ. Thị trường kỳ vọng việc áp dụng thuế quan của Mỹ vào giữa tháng 12 có thể bị đẩy lùi.<br><br>Giá USD tăng mạnh so với các ngoại tệ khác, chỉ số USD-Index tăng 0,3 điểm, lên 97,91 điểm. Các chỉ số chứng khoán Mỹ đều tăng lên mức cao như Dow Jones tăng 0,11%, lên 27.492,63 điểm, Nasdaq tăng 0,02% lên 8.4343,68 điểm…<br><br>Ngoài ra, Ngân hàng Nhân dân Trung Quốc (PBOC) vừa cắt giảm lãi suất cho vay trung hạn (MLF) từ 3,3% xuống 3,25% để hỗ trợ nền kinh tế tăng trưởng, đây là một động thái mở đường cho việc cắt giảm lãi suất cơ bản (LPR) của Trung Quốc.",
			titleimg:"Giá vàng giảm mạnh<br>Ngọc Dương",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
				{
			id:id++,
			title:"Những dự án có thiết kế cao cấp hàng đầu tại TP.HCM",
			titlecontent:"Nhiều dự án căn hộ tại TP.HCM khi giới thiệu ra thị trường đều quảng bá thuộc phân khúc căn hộ cao cấp. Tuy nhiên, số dự án thực sự đáp ứng được đầy đủ các tiêu chuẩn chỉ có thể đếm trên đầu ngón tay.",
			image:"img/taichinh.jpg",
			content:"Nguyễn Hoàng Anh - một kiến trúc sư nổi tiếng cho biết: Một dự án được gọi là cao cấp phải đáp ứng được những yếu tố khắt khe về vị trí, thiết kế kiến trúc, khoảng không lấy sáng, độ hạn hữu, cộng đồng cư dân, tiện ích chung, số thang máy, số căn hộ trên một sàn, số lớp của căn hộ. Ở thời điểm hiện tại, số dự án đáp ứng toàn diện những tiêu chuẩn căn hộ cao cấp tại TP.HCM không nhiều.<br><br>Theo KTS Nguyễn Hoàng Anh: Hầu hết các dự án thuộc phân khúc cao cấp đều có thiết kế đặc biệt, giới hạn số căn trên mỗi sàn và mỗi trục hành lang. Yếu tố này không chỉ đảm bảo tính riêng tư, an ninh, biệt lập, mà còn đảm bảo để tất cả các căn hộ đều có tầm nhìn đẹp, đón sáng và đón nắng tốt.<br><br>Đa số các dự án căn hộ cao cấp đều có tỷ lệ căn góc trên 50%; 100% căn hộ được bố trí lấy sáng theo phương ngang với nhiều mặt tiền để đảm bảo căn hộ luôn lộng gió, ngập tràn ánh sáng và không bị ẩm mốc. Các hành lang của các căn hộ này thường được bố trí với nhiều đầu lấy gió để đảm bảo khí tươi luôn luân chuyển tới từng căn hộ, tránh được tình trạng ngộp, nóng và tối trong đa số các chung cư hiện tại.<br><br>Một điểm nữa, thang máy là yếu tố mà các nhà đầu tư ít chú ý tới khi mua nhà, tại các dự án căn hộ cao cấp, một thang máy không được phục vụ quá 40 -50 căn hộ.<br><br>Cuối cùng, ngoài yếu tố vị trí đẹp, tầm nhìn đẹp, các dự án căn hộ cao cấp thường có mật độ xây dựng rất thấp dưới 30%, chủ đầu tư các dự án này thường dành diện tích lớn cho không gian cây xanh, mặt nước tốt cho sức khỏe. Nhiều dự án còn chịu chi, phát triển mạnh các tiện ích chuyên biệt tốt cho phụ nữ, trẻ em.<br><br>Trong đó, sở hữu thiết kế ấn tượng hàng đầu là căn hộ homes resort Sunshine City Sài Gòn được thiết kế đo ni, đóng giày cho các gia đình có trẻ em tại trung tâm quận 7. Được biết, dự án này sở hữu thiết kế cực kỳ ấn tượng mà ít dự án nào tại TP.HCM có được khi tỷ lệ căn góc trên một tầng giao động từ 50% - 100%. Để có được con số ấn tượng này, chủ đầu tư của dự án chấp nhận giới hạn số căn hộ trên một trục hành lang chỉ 3-5 căn. Cá biệt, một số tầng chỉ có 2 căn hộ trên một trục hành lang với tỷ lệ căn góc 100%. Ngoài thiết kế ấn tượng, tất cả các căn hộ thuộc dự án này đều được thiết kế tiếp sáng theo phương ngang, và bố trí tối đa 2 phòng chức năng theo chiều dọc.<br><br>Thiết kế này đảm bảo tất cả các căn hộ tại Sunshine City Sài Gòn đều đảm bảo được tính riêng tư, yên tĩnh, sở hữu tầm nhìn đẹp, không góc chết, luôn ngập tràn ánh sáng, thoáng gió, khô ráo, khí tươi luân chuyển thường xuyên, tránh được tình trạng ngộp và tối như các dự án bố trí quá nhiều căn hộ trên mỗi trục hành lang. Tại dự án này, mỗi tầng căn hộ tại dự án chỉ có từ 6 - 14 căn hộ, nhưng chủ đầu tư đã bố trí tới 7 thang máy cỡ lớn, vì vậy cư dân không bao giờ gặp phải tình trạng quá tải thang máy.",
			titleimg:"Thị trường TP.HCM khan hiếm dự án căn hộ cao cấp triển khai",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
						{
			id:id++,
			title:"Chớp thời cơ đầu tư bất động sản Cà Mau",
			titlecontent:"Cà Mau nâng cấp thành đô thị loại 1 trong năm 2020, quy hoạch cảng trung chuyển container quốc tế Hòn Khoai, mạnh tay đầu tư cao tốc đường về miền Tây… đang là những thông tin đốt nóng thị trường Cà Mau thời điểm cuối năm 2019.",
			image:"img/taichinh1.jpg",
			content:"TP.Cà Mau là một trong bốn đô thị động lực của vùng, là đô thị hạt nhân vùng Tây Nam, thủ phủ ngành chế biến xuất khẩu thủy sản của cả nước. Đây cũng là nơi khởi nguồn cho các tuyến du lịch về thăm các di tích lịch sử, khu du lịch nghỉ dưỡng và khu dự trữ sinh quyển quốc gia mũi Cà Mau… Theo kế hoạch đến năm 2020, TP.Cà Mau sẽ được công nhận là đô thị loại 1.<br><br>Nhìn từ sự thay đổi của những thành phố, dễ dàng nhận thấy việc gia tăng giá đất là kịch bản gần như được mặc định. Đơn cử như Nha Trang, sau 10 năm đạt đô thị loại 1, giá bất động sản đã tăng 8-12 lần. Tại Bình Dương, chỉ sau 2 năm đạt đô thị loại 1, TP.Thủ Dầu Một đã ghi nhận biên độ tăng giá từ từ 2 đến 3 lần. Hiện giá đất tại đây dao động khoảng 25-45 triệu đồng/m2 tùy vị trí. Mặt tiền đường trung tâm giá giao dịch cả trăm triệu đồng mỗi m2.<br><br>Các chuyên gia cho rằng, việc nâng cấp đô thị đã trở thành bước ngoặt quan trọng để phát triển cơ sở hạ tầng, chỉnh trang đô thị, từ đó thu hút các doanh nghiệp trong và ngoài nước đầu tư. Cà Mau cũng không ngoại lệ, thậm chí lực đẩy còn gia tăng mạnh hơn khi đây mới chỉ là tỉnh thứ 2 của Đồng Bằng Sông Cửu Long đạt tiêu chí này. Chỉ còn vài tháng nữa sẽ bước sang năm 2020 - năm bản lề đánh dấu bước ngoặt của Cà Mau, đây là thời điểm đủ “chín” để các doanh nghiệp và các nhà đầu tư bước vào.<br><br>Theo quy hoạch, Cà Mau sẽ có 2 cảng biển lớn gồm Cảng Năm Căn và Cảng biển tổng hợp Hòn Khoai. Trong đó cảng Năm Căn là cảng tổng hợp địa phương (loại 2). Còn Hòn Khoai được quy hoạch thành cảng trung chuyển container quốc tế, nằm trong chuỗi giá trị toàn cầu, mở ra một cổng kết nối quan trọng trong chuỗi phân phối hàng hóa, dịch vụ toàn cầu (global logistics hub).<br><br>“Báo cáo đầu tư dự án cảng biển tổng hợp Hòn Khoai” do Công ty cổ phần Phát triển cảng trung chuyển container quốc tế Vân Phong (VIP) đưa ra, xác định tổng mức đầu tư dự kiến 5 tỉ USD, trong đó 3,5 tỉ USD cho “siêu cảng” và 1,5 tỉ USD cho khu trung tâm logistics. Dự kiến trong tương lai cảng biển Hòn Khoai có năng lực vận tải 800 triệu tấn hàng hóa mỗi năm, gấp 4 lần công suất của cảng Hiệp Phước (TP.HCM).",
			titleimg:"Toàn cảnh thành phố Cà Mau",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
	],
	vanhoa :[
		{
			id:id++,
			title:"'Phủ bia' lên biểu tượng di sản",
			titlecontent:"Hình ảnh lon bia 'phủ' lên chùa Cầu - biểu tượng của di sản văn hóa thế giới Hội An (Quảng Nam) - để quảng bá sản phẩm bia Huda Huế đã gây phản ứng trong dư luận, cả chính quyền TP.Hội An cũng phản đối.",
			image:"img/vanhoa1.jpg",
			content:"Mới đây, mạng xã hội Facebook lan truyền hình ảnh chùa Cầu (Hội An) được đặt cạnh một lon bia Huda (sản phẩm của Công ty TNHH Carlsberg VN) với nội dung bình luận biểu tượng chùa Cầu “đã bị xâm hại một cách trắng trợn bởi Huda Huế”. Thông tin trên mạng xã hội nêu trên cũng đặt nghi vấn: “Huda Huế đã được sự đồng ý của các cơ quan chức năng ở TP.Hội An chưa mà dám đổi màu sắc của biểu tượng chùa Cầu trong chiến dịch quảng cáo bia của mình?”.<br><br>Theo quan sát, biểu tượng chùa Cầu trên pano quảng cáo đặt ở tuyến QL1 đoạn qua TX.Điện Bàn (Quảng Nam) đã bị đổi sang màu xanh (khác với hình ảnh thực tế) và có một lon bia Huda “khổng lồ” đặt bên cạnh. Một số ý kiến phản đối, cho rằng Huda muốn “phủ bia” cho di sản văn hóa thế giới, xúc phạm đến biểu tượng di sản 4 thế kỷ của Hội An cũng như người dân phố cổ.<br><br>Trao đổi với PV Thanh Niên, ông Nguyễn Văn Sơn, Phó chủ tịch phụ trách UBND TP.Hội An, cho biết Công ty Carlsberg VN sử dụng hình ảnh chùa Cầu và hình một lon bia Huda để quảng bá sản phẩm không hề thông qua chính quyền địa phương. TP.Hội An đã đề nghị Sở VH-TT-DL Quảng Nam có ý kiến chính thức để có hướng xử lý theo thẩm quyền. “Việc sử dụng hình ảnh với màu sắc không đảm bảo, không đúng với bản chất của biểu tượng di sản văn hóa thế giới là sai, địa phương hoàn toàn phản đối”, ông Sơn khẳng định.",
			titleimg:"Du khách tham quan chùa Cầu<br>Ảnh: Mạnh Cường",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Phan Đăng Di: 'Giới làm phim chúng tôi lúc nào chả nhục nhã… vì tiền!'",
			titlecontent:"Bảy năm qua, năm nào đến hẹn lại lên tôi cũng được nghe Phan Đăng Di than thở chuyện tiền nong thiếu thốn cho việc tổ chức hoạt động điện ảnh thường niên Gặp gỡ mùa thu (GGMT), có khi nghe than nhức đầu quá, tôi lại đi cầu cứu nhà sản xuất Trần Thị Bích Ngọc và rồi, tiếp tục… nghe than. Nhưng rồi sao? Có gì khác sau mỗi năm không? Có đấy!",
			image:"img/vanhoa.jpg",
			content:"Những lời than thở không bớt đi, nhưng câu chuyện thì dài ra, bởi vì từ GGMT đã có rất nhiều tác phẩm nghệ thuật được thành hình hài. Và đi đến các liên hoan phim trên thế giới. Và năm thứ bảy này có gì đặc biệt? Chả có gì đặc biệt hơn cả. Chỉ là tình cờ, vào năm thứ bảy này, tôi chợt nghĩ vu vơ đến một thế hệ điện ảnh mới. Giải thích sao nhỉ? Như là thế hệ điện ảnh thứ 5, hay 6 của Trung Quốc sao? Không! Quá cũ kỹ. Một “làn sóng” như là làn sóng mới của Pháp (French New wave) sao? Không! Trần Anh Hùng nói đúng lắm, bây giờ ở Pháp người ta gọi đó là French “old” wave rồi. Vậy thì là gì? Hay chỉ cần nói đơn giản, đó là một thứ tinh thần, một thứ tinh thần mà chúng ta - tất cả những người yêu điện ảnh - vẫn đang theo đuổi. Được không?<br><br>- Thực ra ý định này đã manh nha mấy năm nay rồi, vì chúng tôi gặp rất nhiều khó khăn. Năm nào cũng thế, lúc tổ chức thì vui được mấy ngày nhưng về tới cũng mệt mỏi vì cái chuyện muôn thuở là…. thiếu tiền. Rồi cứ mỗi năm quay trở lại thì cũng là cái quy trình này, đi tìm tài trợ, vui vài hôm và lại mệt vì tiền. Quan trọng là, chúng tôi đều là những người làm phim, cứ vướng vào cái vòng luẩn quẩn này, nên rất nhiều phim chũng tôi muốn làm đã phải gác lại. Trong khi đó, tôi nhìn thấy được đây là thời điểm mà tất cả những người tham gia GGMT nên cùng làm tác phẩm với nhau. Mô hình này chúng tôi bắt đầu thể nghiệm vào năm nay, với phim Chàng dâng cá, nàng ăn hoa được chiếu trên HBO vào tối 10.11 năm nay. Đây là phim tôi làm đạo diễn, Bích Ngọc (nhà sản xuất, Phó chủ tịch GGMT Trần Thị Bích Ngọc - PV) làm sản xuất, nhưng có thể nói đây là một sản xuất của GGMT, với tất cả thành viên tham gia đều đến từ các lớp học GGMT: Diễn viên, thiết kế, phục trang…. Chúng tôi thấy mô hình này hay. Chúng tôi không thể cứ lo mãi cho GGMT như mọi năm nữa, chúng tôi không bỏ GGMT mà sẽ làm nó với quy mô gọn gàng hơn nên quyết định từ năm sau GGMT sẽ dời về Sài Gòn, giảm bớt chi phí, và trong lúc đó có đủ thời gian để chuẩn bị những dự án lớn hơn theo mô hình này, để tất cả những người tham gia vào GGMT có được cơ hội tham gia vào những dự án đó. Và đây là cách mà chúng tôi nghĩ rằng chúng tôi sẽ quảng bá GGMT trong tương lai, GGMT không chỉ là nơi học hành nữa mà đồng thời tạo ra sản phẩm đi ra toàn cầu được.<br><br>- Đúng là một trong những hình dung đầu tiên khi chúng tôi bắt đầu làm GGMT là muốn nó trở thành LHP, và nó như là một giấc mơ của tất cả những người trong ban tổ chức. Chúng tôi là những người đi LHP quốc tế rất nhiều, và khi quan sát các LHP quốc tế, chúng tôi nhận thấy Đà Nẵng rất phù hợp cho mô hình như vậy. Tuy nhiên, sau bảy năm thì tôi hiểu ra rằng, một số điều kiện làm LHP thì chúng tôi có được, như kết nối rộng rãi với tất cả các LHP lớn trên thế giới. Cannes, Berlin, Venice, Rotterdam…. đều từng có người về tham dự GGMT rồi, lại còn đảm nhận vị trí giám khảo phim hạng mục phim nghệ thuật. Sau bảy năm từng làm việc với các hệ thống LHP lớn, chúng tôi mới nhận ra, để giấc mơ trở thành hiện thực thì nội dung chỉ là phần nhỏ thôi, quan trọng nhưng không phải là quyết định. Cái quyết định đằng sau một LHP là làm sao để tổ chức một hệ thống vận hành bài bản, thời gian, công tác chuẩn bị và nhất là... tiền. Nó nằm ngoài khả năng của chúng tôi, nhất là tiền, vì chúng tôi lúc nào cũng thiếu tiền.",
			titleimg:"Đạo diễn Phan Đăng Di và nhà sản xuất Trần Thị Bích Ngọc<br>Ảnh Ngọc Nick",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Ca sĩ Hải Yến bị nhạc sĩ trẻ đuổi ra phòng thu vì hát ‘không nên hồn'",
			titlecontent:"Xuất hiện trong chương trình Giải mã tri kỷ, ca sĩ Hải Yến Idol và nhạc sĩ Huỳnh Quốc Huy có dịp kể lại những kỷ niệm vui trong quá trình hợp tác cùng nhau.",
			image:"img/vanhoa2.jpg",
			content:"Hải Yến tâm sự ấn tượng đầu tiên của cô về Huỳnh Quốc Huy là một nhạc sĩ còn khá trẻ. Thậm chí, cô từng đánh giá sai về năng lực của anh: “Đã có lúc Yến nghĩ cậu này cũng chẳng đến đâu. Đã có lúc Yến định nói thẳng với Huy một là làm việc tiếp thì làm cho tử tế, hai là giải tán luôn, chị không cần em. Tuy nhiên, sau 2 năm làm việc, nữ ca sĩ đã có cái nhìn khác vì sự tâm huyết của đàn em trong từng sản phẩm. “Cậu ấy trẻ nhưng làm việc rất chuyên nghiệp, Yến thích những người trẻ và thái độ làm việc như vậy nên từ sự nghi ngờ cậu này trẻ quá có làm được hay không thì bây giờ Yến hoàn toàn yên tâm”, cô nói thêm.<br><br>Chia sẻ về kỷ niệm của hai chị em, Hải Yến tâm sự cô từng bị Huỳnh Quốc Huy đuổi ra khỏi phòng thu vì không hát được một câu ra hồn. Hải Yến chia sẻ cô thường được mệnh danh là nữ ca sĩ thu âm nhanh nhất khi một bài hát cô thu không quá 30 phút và hầu như không cần chỉnh sửa nhiều. Tuy nhiên, có thời điểm cô mất cả ngày nhưng không hát tốt, không đủ cảm xúc và khiến Huỳnh Quốc Huy không hài lòng. “Lần đầu tiên Yến hát không tốt, Huy còn tử tế, tế nhị nên cũng chưa đuổi. Nhưng đến hai, ba lần không được thì Huy nói bà đi về đi”, Hải Yến kể lại.<br><br>Nói thêm về kỷ niệm này, Huỳnh Quốc Huy cho rằng đó là động thái tôn trọng đàn chị vì muốn sản phẩm cô phải chỉnh chu nhất, tốt nhất có thể. Anh chia sẻ: “Một ca sĩ thu âm đối với em là hát đúng với cảm xúc của mình ở thời điểm đó, ngay tại lúc đó”. Quan điểm này cũng nhận được sự đồng tình của Hải Yến nên cô cảm thấy đồng điệu với nam nhạc sĩ về âm nhạc và cách làm sản phẩm. Đồng thời, cô tranh thủ “bóc mẽ đàn em: “Yến là người khó tính nên có những bài Yến thu rồi nhưng qua tháng sau thì thấy không hay nữa. Nay vui mai buồn nên mình muốn thu lại cho hay nhưng Huy không đồng ý.<br><br>Hải Yến cho biết thêm thời gian đầu khi chưa thân thiết, hai nghệ sĩ không làm việc trực tiếp với nhau nên xảy ra tình trạng không hiểu ý, mọi công việc đều trì trệ và không mang lại kết quả tốt. Vì vậy, cô hẹn Huỳnh Quốc Huy để nói chuyện thẳng thắn, giải quyết khúc mắc để công việc được trôi chảy hơn. Huỳnh Quốc Huy kể: “Em bước tới quán cà phê thì chị Yến như một cơn bão vậy đó, làm cho em một tràng, nhưng sau khi nói ra những khúc mắc thì mới biết vấn đề không phải ở hai chị em mà là do người trung gian truyền tin không đúng và không kịp thời”. Tuy nhiên, cũng nhờ cuộc gặp đó mà cả hai trở nên gắn bó hơn.<br><br>Cuối chương trình, Hải Yến cảm ơn Huỳnh Quốc Huy vì đã bên cạnh cô hơn 2 năm qua, đồng hành trong những sản phẩm âm nhạc từ vị trí biên tập cho đến sản xuất, để cô không còn cảm thấy lạc lõng, cô đơn. Huỳnh Quốc Huy cũng xin lỗi vì đã không tạo nên hit cho Hải Yến và chưa mang lại được cho cô những sản phẩm tốt hơn những gì Hải Yến đang có.<br><br>“Em sẽ dùng hết công lực của mình để hỗ trợ chị tối đa. Mình vẫn phải đi cùng với nhau và chị là tấm gương để em trau dồi, học hỏi nhiều hơn. Chị là người đầu tiên trao cho em niềm tin em làm được. Từ trước khi chị đến thì chưa ai can đảm trao cho em niềm tin đó. Chị là dấu son trong sự nghiệp của em từ lúc em vào nghề đến giờ”, anh nói.",
			titleimg:"Ca sĩ Hải Yến ngậm ngùi kể lại chuyện bị đàn em đuổi ra khỏi phòng thu<br>Ảnh: BTC",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Đạo diễn 'Điều ước thứ 7' Lý Hải Thanh qua đời ở tuổi 46",
			titlecontent:"Rất nhiều MC, đồng nghiệp đã bày tỏ sự tiếc nuối với sự ra đi vị đạo diễn nổi tiếng.",
			image:"img/vanhoa3.jpg",
			content:"Mới đây, thông tin đạo diễn Lý Hải Thanh qua đời sau thời gian dài chống chọi với bệnh tật đã được chia sẻ trên mạng xã hội. Theo cáo phó, đạo diễn Lý Hải Thanh đã trút hơi thở cuối cùng vào lúc 4 giờ 20 phút sáng 4.11 tại nhà riêng ở Hà Nội, hưởng dương 46 tuổi. Trưa 5.11, thi hài của đạo diễn Lý Hải Thanh sau khi hỏa táng được đưa đi an táng tại nghĩa trang Thọ Nguyên, Thọ Xuân (Thanh Hóa).<br><br>Ngay sau khi nhận được thông tin, rất nhiều MC, đồng nghiệp và khán giả đã bày tỏ sự bàng hoàng và thương tiếc trước sự ra đi của vị đạo diễn nổi tiếng này. Trên trang cá nhân, MC Thành Trung viết: Nhận được tin ra đi của một người anh, người đạo diễn - người luôn âm thầm ủng hộ mình trong các chương trình, đặc biệt là chương trình Đừng để tiền rơi, buồn quá. Thấy cuộc sống sao ngắn ngủi, biến cố đến với anh nhanh quá. Em sẽ đến để đưa tiễn anh. Điều em hối tiếc lúc này là vẫn chưa đến thăm anh một lần trước khi anh ra đi.<br><br>Trong khi đó, BTV Quang Minh cũng ngậm ngùi: “Nửa đêm thức giấc, mới hay tin mình vừa mất đi một người anh, người bạn, người đồng nghiệp. Vĩnh biệt anh - Lý Hải Thanh”.<br><br>BTV Bùi Thu Thủy cũng bày tỏ sự thương tiếc, xót xa trước sự ra đi đột ngột của đồng nghiệp. Cô chia sẻ: Em ấy đã trải qua một năm chống chọi với các cuộc mổ, điều trị, phục hồi và đau lại vì u não. Sáng sớm 4.11, em ấy rời xa cõi tạm để lại mẹ già, vợ trẻ và hai con. Em ấy đã được làm nhiều chương trình hay, có những chuyến đi thú vị vì nghề sản xuất chương trình truyền hình. Em ấy còn kịp hoàn thành xuất sắc một chương trình truyền hình trực tiếp vào sinh nhật năm ngoái, trước khi nhập viện lần đầu. Chắc chắn còn nhiều dự định, mong muốn Hải Thanh chưa làm xong. Em đến cuộc đời này vào mùa thu và cũng rời đi vào một ngày thu. Xin nén lại nỗi đau, cầu mong em siêu thoát, Hải Thanh nhé.<br><br>Dưới những bài viết này, nhiều đồng nghiệp và khán giả cũng bày tỏ sự thương tiếc và gửi lời chia buồn đến với gia đình đạo diễn: Cuộc đời vô thường quá, chia buồn cùng gia đình, Ôi sốc qua, cuộc đời vô thường em à Anh ấy làm đạo diễn nhiều chương trình lắm. Sao giờ toàn người tử tế lại cứ ra đi lặng lẽ thế....<br><br>Đạo diễn Lý Hải Thanh sinh năm 1973, là người đồng hành với nhiều chương trình của Đài truyền hình Việt Nam như: Không giới hạn - Sasuke Việt Nam, Điều ước thứ 7, Tìm kiếm MC thế hệ mới, Đừng để tiền rơi...",
			titleimg:"Sự ra đi của đạo diễn Lý Hải Thanh khiến nhiều nghệ sĩ và đồng nghiệp bàng hoàng, thương tiếc<br>Ảnh: FBNV",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
	],
	thethao: [
		{
			id:id++,
			title:"Gia hạn thêm 3 năm, HLV Park Hang-seo hứa đưa bóng đá Việt lên tầm cao mới",
			titlecontent:"Thứ trưởng Bộ VH-TT-DL kiêm Chủ tịch Liên đoàn Bóng đá VN (VFF) Lê Khánh Hải thông báo, VFF đã đàm phán thành công và tái ký hợp đồng không chỉ với HLV Park Hang-seo mà còn cả ê kíp cộng sự người Hàn Quốc của ông với thời hạn 3 năm.",
			image:"img/thethao.jpg",
			content:"Người đứng đầu VFF nói: “Quá trình thương thảo luôn diễn ra với thiện chí của cả đôi bên. VFF luôn đánh giá rất cao những đóng góp to lớn của ông Park cho bóng đá VN suốt 2 năm qua. Trong đó nổi bật như ngôi á quân giải U.23 châu Á 2018, lọt vào vòng chung kết giải U.23 châu Á 2020; vào bán kết ASIAD 18, có mặt ở tứ kết Asian Cup 2019; vô địch AFF Cup 2018... Chúng tôi thực sự quý trọng tài năng, đức độ của người thầy Hàn Quốc và không có lý do gì lại không giữ chân ông ở lại.<br><br>Ông Park luôn bày tỏ khát vọng hướng đến những thành tích tốt đẹp hơn cho bóng đá VN. Đôi bên đã đi đến thống nhất cao và tôi đã chỉ đạo VFF hết sức tạo điều kiện cho ông Park cùng các trợ lý hoàn thành tốt công việc. Dĩ nhiên đã ký với ông Park thì phải ký cả với ê kíp cộng sự người Hàn Quốc. Việc tái ký này sẽ đem đến niềm vui lớn cho tất cả những người trong cuộc và cho người dân VN cũng như Hàn Quốc”.<br><br>Bản hợp đồng cũ sẽ hết hạn vào ngày 31.1.2020. Thời hạn của bản hợp đồng mới là 3 năm tính từ ngày 1.2.2020 - 1.2.2023. Mức lương của ông Park không được tiết lộ nhưng có thể dao động từ 45.000 - 50.000 USD/tháng (mức lương cũ là 20.000 USD/tháng). Ngoài ra, ông Park sẽ được những khoản thưởng cao ở những giải đấu mà tuyển VN, U.23 VN, U.22 VN tham dự và đạt thành tích tốt. Chủ tịch VFF nhấn mạnh VFF hoàn toàn có thể đảm đương được nguồn tài chính để trả lương cho ông Park cũng như các trợ lý với sự giúp đỡ đắc lực của doanh nghiệp yêu bóng đá.<br><br>Theo ông Trần Quốc Tuấn, Phó chủ tịch VFF, về mặt nguyên tắc hợp đồng được tái ký 3 năm. Nhưng sau 2 năm nếu thấy cần thiết các bên vẫn có thể ngồi lại xem xét. Được biết, mức lương cho mỗi trợ lý người Hàn ở hai đội tuyển và đội U.22 VN không có con số chung, thấp nhất có thể 15.000 USD/tháng và cao nhất khoảng 18.000 USD.<br><br>Một số nội dung quan trọng của bản hợp đồng mới: Bóng đá nam VN cố gắng đứng trong nhóm 10 nước hàng đầu châu Á (hiện đang đứng top 15); đội U.23 VN phấn đấu cạnh tranh suất tham dự Olympic Tokyo 2020, giành quyền vào chung kết môn bóng đá nam SEA Games 31 năm 2021 tại sân nhà. Đội tuyển nam bảo vệ thành công ngôi vô địch AFF Cup 2020, AFF Cup 2022; trở thành 1 trong 12 đội xuất sắc nhất châu Á ở vòngloại World Cup 2022.<br><br>Trong cuộc làm việc trước khi đi đến thống nhất tái ký hợp đồng, ông Park đã khẳng định với Phó chủ tịch VFF Trần Quốc Tuấn rằng, ông cảm ơn VFF và các CLB cũng như các cầu thủ đã hỗ trợ giúp ông thành công tại VN. Ông Park nhấn mạnh không chỉ duy trì mà sẽ cố gắng đưa bóng đá VN lên một tầm cao mới.<br><br>Lễ công bố gia hạn bản hợp đồng sẽ diễn ra vào sáng 7.11 tại Hà Nội. Sau đó một ngày, ông Park sẽ nhận giải thưởng HLV xuất sắc nhất Đông Nam Á tại lễ trao giải AFF Awards.",
			titleimg:"HLV Park Hang-seo sẽ đưa bóng đá VN lên một tầm cao mới?<br>Độc Lập",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Những hạt sạn lớn của V-League 2019",
			titlecontent:"Công tác trọng tài còn xảy ra sai sót khá nhiều, vấn đề an ninh an toàn ở một số trận đấu còn nổi cộm – đó là hai tồn tại lớn được mổ xẻ tại hội nghị tổng kết các giải bóng đá chuyên nghiệp quốc gia 2019 do Công ty cổ phần bóng đá chuyên nghiệp Việt Nam (VPF) tổ chức vào sáng 6.11.",
			image:"img/thethao1.jpg",
			content:"VPF đã phân tích khá kỹ những hạn chế trong sự phối hợp giữa một số CLB và Ban điều hành VPF. Theo đó, một vài đội bóng còn xem nhẹ, chủ quan, triển khai rất hời hợt công tác đảm bảo an ninh an toàn trận đấu. Đó là nguyên nhân chính dẫn đến những vụ việc đặc biệt nghiêm trọng. Trong đó, Ban tổ chức CLB Hà Nội hai lần vi phạm quy định an ninh an toàn, gồm trận đấu ở vòng 6, không ngăn chặn được cổ động viên Hải Phòng đốt rất nhiều pháo sáng. Ở trận đấu bù vòng 22 đã để cổ động viên Nam Định đốt pháo thăng thiên gây chấn thương rất nặng cho một khán giả nữ, 2 cảnh sát cơ động bị hành hung.<br><br>Theo nhận định của ông Trần Anh Tú – Chủ tịch kiêm Tổng giám đốc VPF, những vụ việc nổi cộm nêu trên đã để lại hình ảnh xấu cho giải và để triệt tiêu tình trạng vi phạm quy định an ninh an toàn ở mùa giải năm sau, VPF và các CLB sẽ phải tập trung nghiên cứu và đề nghị sửa đổi bổ sung Quy chế bóng đá chuyên nghiệp, Quy định về kỷ luật cho phù hợp với thực tế.<br><br>Về chất lượng yếu kém của một số trọng tài, VPF đã nhận được nhiều chất vấn của báo chí, trong đó hỏi thẳng vai trò cũng như trách nhiệm của Ban Trọng tài Liên đoàn Bóng đá Việt Nam (VPF) dưới sự điều hành của Trưởng ban Dương Văn Hiền. Lãnh đạo VPF thừa nhận, công tác trọng tài còn xảy ra sai sót khá nhiều và thường trực VFF đã phải có nhiều cuộc làm việc với Ban Trọng tài để chỉnh đốn lại. Ông Trần Anh Tú cho hay, tại hội nghị tổng kết, lãnh đạo Tổng cục TDTT cũng phải lên tiếng nhắc nhở và yêu cầu mùa giải sang năm, VFF phải có sự chỉ đạo quyết liệt để trọng tài không còn mắc sai sót đến mức ảnh hưởng đến kết quả trận đấu nữa. Tuy nhiên, ông Tú cũng nhấn mạnh, trọng tài sai là do trình độ kém chứ không có vấn đề gì về tư tưởng. “Như vụ bẻ còi của trọng tài Trương Hồng Vũ ở trận Viettel gặp Bình Dương, sai sót về phương pháp và bản lĩnh yếu chứ không xấu về tâm”, ông Tú nói.<br><br>“Vậy khi nào công nghệ VAR sẽ được áp dụng tại V-League?”, ông Trần Anh Tú nói: “FIFA cũng đã sang Việt Nam để giúp VPF bắt đầu làm quen với VAR nhưng FIFA cũng khuyến nghị VPF không được trả lời báo chí về việc bao giờ áp dụng VAR vì mọi thứ cần phải làm đúng theo quy định. Hơn nữa, VAR không thể là giải pháp tốt nhất để nâng tầm trọng tài mà cái chính vẫn phải nằm ở khâu đào tạo chất lượng trọng tài, nâng cao tay nghề và chuyên môn”.<br><br>Báo Thanh Niên hỏi ông Trần Anh Tú: “Vụ cầu thủ Steven kiện CLB Hải Phòng và FIFA yêu cầu đội bóng này đền bù 5 tỉ đồng. Hiện tại, chưa có câu trả lời cuối cùng từ FIFA nhưng nếu trong trường hợp Hải Phòng không trả tiền và bị phạt nặng như cho xuống hạng thì VPF tính toán thế nào?”. Người đứng đầu VPF nói: “Chúng tôi vẫn đang chờ FIFA. Bộ phận pháp lý của VFF cũng như lãnh đạo VFF sẽ có hướng xử lý liên quan đến Hải Phòng sau khi có quyết định từ FIFA”.<br><br>Một sự việc khá “trớ trêu” khác nữa là theo lời “tố” của một số CLB dự V-League, đội Hải Phòng là đội duy nhất ở Việt Nam không chịu mua bảo hiểm cho cầu thủ. Ông Trần Anh Tú cho biết quan điểm: “Mua bảo hiểm xã hội, bảo hiểm y tế là quy định bắt buộc. Nếu Hải Phòng không mua, nghĩa là đã vi phạm Bộ luật Lao động, không đáp ứng đủ tiêu chí của AFC. Nếu CLB Hải Phòng không mua thì sẽ phải chịu trách nhiệm và AFC sẽ có hình thức xử lý vì nếu thật như vậy, đội bóng đã sai”. Xin được nhắc lại là đội Hải Phòng do ông Trần Mạnh Hùng - Phó chủ tịch VPF làm chủ tịch. Dư luận sẽ thắc mắc tại sao quan chức VPF mà lại để đội bóng mình phạm luật như vậy.",
			titleimg:"Hình ảnh không đẹp của bóng đá Việt Nam<br>Minh Tú",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Cầu thủ futsal Việt Nam ồ ạt xuất ngoại sang Nhật Bản và Tây Ban Nha",
			titlecontent:"Từ bề dày thành tích cấp CLB và tuyển quốc gia, futsal Việt Nam đang tạo sự tín nhiệm lớn khi những nền bóng đá lớn như Nhật Bản, Tây Ban Nha liên tục “nhập khẩu” cầu thủ ta.",
			image:"img/thethao2.jpg",
			content:"Mới nhất 2 fixo (thuật ngữ chỉ trung vệ chơi thấp nhất đội hình trong futsal) trụ cột của tuyển futsal Việt Nam và CLB Thái Sơn Nam là Trần Văn Vũ và Phạm Đức Hòa sẽ có chuyến thử việc hơn 1 tháng tại CLB futsal O Parrulo Ferrol FS của Tây Ban Nha.<br><br>Duyên cớ bắt đầu từ tháng 4.2014, khi tuyển futsal Việt Nam tập huấn và thi đấu giao hữu với CLB Parrulo Ferrol FS để chuẩn bị cho vòng chung kết futsal vô địch Châu Á 2014.<br><br>Khi đó CLB O Parrulo Ferrol FS còn đang đá ở giải hạng nhì TBN. Trận đó, chúng ta thắng 4-3, Văn Vũ và Đức Hòa mỗi người ghi một bàn thắng.<br>Cũng nói thêm, Ferrol là thành phố quê hương của HLV Bruno Garcia và ông cũng đã từng là HLV ở CLB O Parrulo Ferrol FS trong quá khứ.<br><br>Tin rằng 2 lời đề nghị từ nền futsal hàng đầu thế giới Tây Ban Nha chính là sự ghi nhận cao nhất cho tiềm năng, khả năng của cầu thủ Việt. Nó cho thấy cầu thủ Việt Nam hoàn toàn đủ sức chơi ở tầm cao nếu được đầu tư bài bản.<br><br>Hành trình xuất khẩu cầu thủ không chỉ thế. Trước đó, Minh Trí và Thái Huy là bộ đôi tuyển thủ mở màn cho trào lưu “xuất khẩu” cầu thủ Việt khi nhận lời thi đấu ở Nhật Bản.<br><br>Ngày 4.11, pivo Nguyễn Minh Trí và ala Trần Thái Huy đã bay sang Nhật Bản để thi đấu cho CLB Futsal Npo Yokohama Sport & Culture (Y.S.C.C) theo thỏa thuận giữa Thái Sơn Nam và Y.S.C.C.<br><br>Y.S.C.C đã đặt vấn đề với Thái Sơn Nam mượn Nguyễn Minh Trí và Trần Thái Huy từ hồi tháng 6/2019. Do hai cầu thủ này còn vướng thi đấu cho Thái Sơn Nam và đội tuyển futsal một loạt giải quan trọng nên hôm nay Minh Trí và Thái Huy mới lên đường sang Nhật.<br><br>CLB Futsal Y.S.C.C. Yokohama hiện chơi ở giải hạng nhì Futsal vô địch quốc gia Nhật Bản và đang tạm dẫn đầu bảng xếp hạng với 25 điểm sau 9 vòng đấu.<br><br>Giải futsal hạng nhì của Nhật Bản năm nay có sự tham dự của 8 đội và mục tiêu của CLB Y.S.C.C. Yokohama là giành vé thăng lên hạng nhất.",
			titleimg:"Minh Trí (8) là một trong những trung phong ấn tượng nhất của futsal Việt Nam<br>Độc Lập",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Đà Nẵng có thể sẽ tổ chức tiếp giải U.21 quốc tế 2 năm nữa",
			titlecontent:"Đó là ý kiến của Lãnh đạo TP Đà Nẵng sau khi kết thúc giải U.21 quốc tế năm 2019 rất thành công trên sân vận động Hòa Xuân từ ngày 30.10 đến 5.11 vừa qua",
			image:"img/thethao3.jpg",
			content:"Ngay sau khi kết thúc giải U.21 quốc tế, các doanh nghiệp ở TP Đà Nẵng đã gửi đến Ủy ban Nhân dân TP Đà Nẵng lời ngợi khen đội U.21 tuyển chọn Việt Nam đá quá hay và về sự phối hợp rất tốt với Tập đoàn Truyền thông Thanh Niên và Liên đoàn bóng đá Việt Nam (VFF). Vì thế thông qua Ủy ban Nhân dân TP Đà Nẵng, các doanh nghiệp đã quyết định thưởng nóng 200 triệu đồng. Chủ tịch VFF Lê Khánh Hải cũng quyết định thưởng 200 triệu đồng cho đội. Tổng cộng cả giải thưởng lẫn tiền thưởng, toàn đội nhận hơn 660 triệu đồng. Một con số vô cùng khích lệ cho nỗ lực của toàn đội U.21.<br><br>Chủ tịch UBND TP Đà Nẵng Huỳnh Đức Thơ trong cuộc gặp sau đó với BTC giải đã đánh giá rất cao chất lượng và công tác tổ chức bài bản, chuyên nghiệp của giải U.21 quốc tế. Chủ tịch Huỳnh Đức Thơ nhấn mạnh  Thay mặt Lãnh đạo và Nhân dân TP, tôi xin cảm ơn nhà báo Nguyễn Công Khế và các cộng sự cùng VFF đã mang giải U.21 quốc tế về Đà Nẵng, tạo nên không khí rộn ràng cho TP Đà Nẵng hơn một tuần lễ vừa qua, giúp cho người hâm mộ địa phương thưởng ngoạn tốt một giải đấu với tiêu chí xanh sạch đẹp<br><br>Ông Huỳnh Văn Hùng, Giám đốc Sở VH-TT TP Đà Nẵng cho biết  Sau giải này chúng tôi sẽ tổng kết rút kinh nghiệm về sự phối hợp với BTC giải  để sau này khi còn tiếp tục đăng cai tổ chức thì giải U.21 quốc tế sẽ càng hay hơn, hấp dẫn hơn. Chúng tôi rất vui khi Tập đoàn Truyền thông Thanh Niên và VFF đã làm hết sức mình tạo nên sân chơi U.21 quốc tế quá hay và hấp dẫn. Nhất là công tác tổ chức đâu ra đó, rất bài bản, chặt chẽ, giới thiệu đại biểu cũng như mời người trao giải có trình tự , lớp lang, không để xảy ra bất cứ sai sót nào. Chúng tôi sẽ tiếp tục tham mưu cho lãnh đạo TP để có chỉ đạo tiếp theo với hy vọng trong tương lai U.21 quốc tế sẽ quay về với Đà Nẵng, có thể sau 2 năm nữa<br><br>Nhà báo Nguyễn Công Khế, Trưởng BTC giải cũng nhấn mạnh Tôi xin cảm ơn Chủ tịch Huỳnh Đức Thơ và lãnh đạo chính quyền cùng các Sở ban ngành của TP đã hết mình ủng hộ cho giải. Danang Golden Bay Hotel đã dành mọi điều kiện ăn ở tốt nhất khi lần đầu tiên tất cả mọi lực lượng được ăn ở 5 sao. Thời tiết cũng vô cùng thuận lợi để trận chung kết quá hay đẹp. Hy vọng Đà Nẵng sẽ lại đồng hành cùng với chúng tôi trong những giải U.19 hay U.21 sắp tới<br><br>Cũng ngay sau khi kết thúc giải, ông Trần Song Hải, giám đốc Công ty tư vấn DP đã quyết định thưởng cho Ban huấn luyện đội tuyển VN 500 USD, thưởng riêng thêm cho thủ môn Dương Tùng Lâm 100 USD và thưởng trưởng đoàn Hoàng Văn Phúc 100 USD",
			titleimg:"Danh Trung và U.21 tuyển chọn VN trong niềm vui chiến thắng<br>T.K",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
	],
	xe: [
		{
			id:id++,
			title:"Mitsubishi Xpander sắp có thêm biến thể SUV cạnh tranh Toyota Rush",
			titlecontent:"Dựa trên nền tảng thiết kế của mẫu MPV - Xpander đang được khách hàng ưa chuộng, Mitsubishi phát triển và đang rục rịch trình làng mẫu SUV mới tại thị trường Đông Nam Á.",
			image:"img/xe.jpg",
			content:"Mới đây, Công ty PT Mitsubishi Motors Krama Yudha Sales Indonesia (MMKSI) – liên doanh của Mitsubishi Motor tại Indonesia vừa hé lộ đoạn video quảng cáo kèm theo một số thông tin về mẫu SUV mới, được cho là phát triển dựa trên nền tảng của mẫu MPV - Xpander.<br><br>Trong thông cáo báo chí gửi đến các đơn bị truyền thông Indonesia, Mitsubishi Motor Corporation tiết lộ: “Crossover/SUV mới là hiện thân của thương hiệu Mitsubishi Motor. Mẫu xe này mang đặc tính của xe MPV kết hợp với sự mạnh mẽ của dòng xe thể thao đa dụng SUV”.<br><br>Theo những hình ảnh trong đoạn video được MMKSI công bố, mẫu SUV này có thiết kế khoảng sáng gầm xe cao hơn Xpander. Các chi tiết như vòm bánh xe, thân xe được tạo dáng mạnh mẽ, cơ bắp hơn và có thêm thanh giá nóc trên mái che. Trong khi đó, phần đầu xe, đuôi xe mang ngôn ngữ thiết kế Dynamic Shield thế hệ mới với những đường nét tương tự Mitsubishi Xpander.<br><br>Ngoài đoạn video ngắn, Mitsubishi Motor chưa công bố thông tin liên quan đến thông số kỹ thuật và giá của phiên bản SUV này. Tuy nhiên, theo giới truyền thông “xứ vạn đảo” biến thể SUV của Xpander nhiều khả năng vẫn sử dụng động cơ xăng DOHC 16 van dung tích 1.5 lít tương tự mẫu MPV Xpander. Đại diện MMKSI cho biết, thông tin chính thức về mẫu xe này sẽ được công bố vào ngày 12.11 tới tại Jakarta, Indonesia.<br><br>Việc bổ sung thêm biến thể SUV của Xpander được xem là bước đi chiến lược của Mitsubishi nhằm mở rộng dải sản phẩm, nhóm khách hàng cũng như gia tăng tính cạnh tranh trong phân khúc SUV phổ thông.<br><br>Sự xuất hiện của mẫu xe này thực sự là mối đe doạ đối với Toyota Rush – mẫu xe đang chiếm phần lớn thị phần phân khúc SUV cỡ nhỏ phổ thông tại Indonesia cũng như một số thị trường trong khu vực Đông Nam Á.",
			titleimg:"Mẫu SUV mới được Mitsubishi phát triển dựa trên nền tảng Xpander",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Honda SH mới tại Việt Nam thông minh hơn, giá tăng mạnh",
			titlecontent:"Chỉ sau vài giờ đồng hồ nhá hàng trước thềm triển lãm EICMA - Ý, Honda SH 2020 mới với một số cải tiến trình làng thị trường Việt Nam với giá từ 70,99 triệu đồng.",
			image:"img/xe1.jpg",
			content:"So với phiên bản châu Âu ra mắt tại triển lãm EICMA 2019, Honda SH 2020 không đổi về các thông số kỹ thuật cơ bản nhưng cảnh báo Smartkey vẫn được giữ nguyên, ốp mặt sau yếm xe khu vực để chân dạng 3D lượn sóng.<br><br>Ở thế hệ mới SH 2020 vẫn giữ nguyên phong cách thiết kế bề thế, lịch lãm đậm chất Ý nhưng thay đổi lớn ở cụm đèn pha LED được đưa xuống phía dưới có tính năng tự động bật sáng cùng đèn LED 2 tầng phía sau. Chính vì vậy phần đầu xe cũng có thay đổi nhẹ về thiết kế nhưng đáng chú ý hơn cả là sự thay thế của cụm đồng hồ cũ kỹ bằng màn hình LCD hiển thị được nhiều thông tin hơn.<br><br>Đặc biệt, Honda lần đầu tiên bổ sung khả năng kết nối Bluetooth cho xe ga phổ thông giúp SH mới đồng bộ được với điện thoại thông minh, hiển thị tin nhắn, cuộc gọi ngay trên màn hình của xe. Khách hàng cũng có thể cài đặt ứng dụng My Honda+ do đội ngũ tại Việt Nam phát triển giúp kiểm tra lịch bảo dưỡng, thay dầu cũng như thông tin mới nhất từ hãng xe Nhật Bản.<br><br>Ngoài ra, khung xe cải tiến giúp tăng trục cơ sở lên 13 mm góc lái đạt 46 độ giúp tư thế lái thoải mái hơn cho phố. Việc chuyển bình xăng sang phía trước đã được Honda lắng nghe. Nó cũng giúp hãng xe Nhật Bản tối ưu không gian cốp xe từ 18 lên 28 lít, thay thế cụm sạc 12 volt bằng sạc USB tiện dụng hơn.<br><br>Thay đổi tiếp theo nằm ở động cơ eSP+ cải tiến với 4 van và hệ thống căng xích cam thủy lực dầu giúp xe hoạt động mạnh mẽ hơn nhưng mức tiêu hao nhiên liệu giảm 3% theo lý thuyết. Bản ABS 2 kênh có thêm sự hỗ trợ của hệ thống kiểm soát lực xoắn HSTC giúp SH mới tự tin hơn khi vận hành trên đường trơn trượt.<br><br>Đáng tiếc giá bán của Honda 2020 mới tiếp tục tăng mạnh so với thế hệ cũ. Cụ thể, SH125i CBS có giá từ 70,99 triệu đồng, bản SH125i ABS có giá 78,99 triệu đồng. Riêng SH150i CBS có giá 87,99 triệu đồng, 95,99 triệu đồng cho bản ABS. Tất cả 4 phiên bản đều tăng từ 3 - 6 triệu đồng so với thế hệ cũ.<br><br>Honda SH 2020 chính thức bán ra thị trường Việt Nam từ ngày 24.11 tới, Honda Việt Nam kỳ vọng bán được 125.000 xe/năm.",
			titleimg:"Honda SH 2020 mới trình làng thị trường Việt Nam với giá tăng mạnh",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Hyundai Elantra 2020 có thể bị văng bánh xe khi đang chạy",
			titlecontent:"Mẫu xe khá ăn khách tại thị trường Việt Nam nhưng 2 đợt triệu hồi liên tiếp xảy ra tại Bắc Mỹ, trong đó có một lỗi khá ngh‌iêm trọ‌ng liên quan đến hệ thống lái ảnh hưởng ít nhiều đến Hyundai Elantra.",
			image:"img/xe2.jpg",
			content:"Đợt triệu hồi đầu tiên của Hyundai Elantra 2020 tại thị trường Bắc Mỹ liên quan đến 744 xe, do ốc bắ‌t ở rô-tuyn lái đứng được siết không đủ chặ‌t, điều này khiến việc điều khiển sẽ không theo ý muốn và tiềm ẩn nguy cơ tai nạn.<br><br>Đợt triệu hồi thứ 2 lên quan tới 48 chiếc Hyundai Elantra đời mới. Nguyên nhân cũng xuất phát từ lỗi ốc vít không được bắt chặt có thể làm văng bánh xe khi di chuyển trên đường. Trong một số trường hợp, sự cố này có thể tiềm ẩn nguy cơ tai nạn cho người dùng và các phương tiện khác.<br><br>Tại Việt Nam, trong năm 2019, hãng xe Hàn Quốc đã phải tiến hành hai đợt triệu hồi dành cho mẫu xe bán chạy Hyundai Grand i10. Lần đầu tiên vào tháng 5 khi có 178 xe gặp lỗi nhầm lẫn trong quy trình lắp ráp phanh. Đợt triệu hồi thứ hai ảnh hưởng tới 11.540 xe Grand i10 khi bu-lông bắt puly đầu trục khuỷu không đảm bảo chất lượng, tiềm ẩn các nguy cơ gãy bu-lông và dễ xảy ra tai nạn.<br><br>Vào hồi tháng 3 năm nay, Hyundai cũng đã phải tiến hành đợt triệu hồi số lượng lớn tới 570.000 xe Hyundai Sonata và Santa Fe tại Bắc Mỹ do nguy cơ cháy nổ. Cũng trong năm nay, vào hồi tháng 8, Hyundai Bắc Kinh đã phải thực hiện chiến dịch triệu hồi hơn 400.000 xe Hyundai Tucson dính lỗi kỹ thuật có thể gây hỏng động cơ.<br><br>Tại Việt Nam, mẫu sedan hạng C Hyundai Elantra lắp ráp trong nước và phân phối ra thị trường với 4 phiên bản khác nhau có giá bán dao động từ 580-769 triệu đồng. Đây cũng là đối thủ cạnh tranh của Mazda3, Kia Cerato và Honda Civic. Tính đến hết tháng 9.2019 đã có 625 xe bàn giao tới tay khách hàng.<br><br>Hãng xe Hàn Quốc tiến hành triệu hồi Hyundai Elantra 2020 từ ngày 27.12 tới, khách hàng sẽ mang xe tới các đại lý chính hãng của Hyundai để được kiểm tra và hỗ trợ siết chặt các ốc vít để đảm bảo an toàn.",
			titleimg:"Hyundai Elantra 2020 tại thị trường Mỹ dính lỗi hệ thống lái",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Cuộc sống lên đời từ khi mua ô tô",
			titlecontent:"Tuy chưa phải là người giàu sang nhưng với tôi bây giờ ô tô đã là phương tiện không thể thiếu được.",
			image:"img/xe3.jpg",
			content:"Theo dõi diễn đàn xe của Thanh Niên gần đây tôi thấy có một vài ý kiến cho rằng xe hơi Việt Nam quá đắt, mua xe là lãng phí. Quan điểm của tôi về vấn đề này lại có phần khác biệt. Đúng là giá xe tuy có đắt nhưng việc sở hữu một chiếc ô tô là rất đáng. Thậm chí, giá xe hơi có cao hơn nữa thì tôi cũng sẽ cố gắng để dành tiền mua bằng được.<br><br>Hiện tại tôi đang sở hữu một chiếc Honda City đời 2016. Lúc mua tôi phải vay trả góp ngân hàng 200 triệu đồng. Tuy nhiên, tôi cảm thấy cuộc sống hiện tại của mình rất ổn, không có gì nặng nề, chật vật như người ta vẫn nói.<br><br>Ý định mua xe của tôi xuất hiện một cách rất bột phát. Từ lần đi nhờ xe của một người bạn, tôi nảy sinh suy nghĩ rằng nếu mình cũng sở hữu một chiếc thì thực thú vị biết bao. Sau này khi học xong bằng lái thì tôi lại càng trở nên quyết tâm.<br><br>Vợ tôi biết tâm tư của chồng nên cũng tích cực tiết kiệm, tích góp. Vì còn phải nuôi 2 đứa con nên mãi mà chúng tôi mới để dành được 400 triệu đồng. Tôi đặt vấn đề vay thêm anh em trong gia đình 200 triệu đồng để mua một chiếc xe mới nhưng không được mọi người ủng hộ. Đa phần ý kiến cho rằng, vợ chồng tôi không làm ăn kinh doanh nên mua xe là lãng phí, chưa cần thiết.<br><br>Cuối cùng, tôi và vợ vẫn quyết định mua xe trả góp với thời hạn thanh toán 3 năm. Mỗi tháng nhà tôi phải trả ngân hàng gần 8 triệu đồng cả gốc lẫn lãi. Việc chi tiêu có chắt bóp lại nhưng cuộc sống cũng thi vị hơn nhiều.<br><br>Đầu tiên là cảm giác mưa không tới mặt, nắng không tới đầu. Thời tiết ở miền Bắc khổ nhất là mỗi khi vào ngày mưa phùn, gió lạnh. Có ô tô tôi có thể đưa con tới trường mà không ngại áo mưa lụp xụp như trước nữa. Cái cảm giác ngồi trong xe ấm cúng, bật bản nhạc yêu thích thật sướng biết bao.",
			titleimg:"Cuộc sống thú vị hơn từ khi có ô tô",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
	],
	dulich :[
		{
			id:id++,
			title:"Du lịch Việt Nam: hai thập niên thoát khỏi ‘thời bao cấp’",
			titlecontent:"Trong số các ngành kinh tế, thì du lịch Việt Nam thoát khỏi dấu ấn thời bao cấp thuộc hàng muộn nhất, nhưng lại ghi dấu ấn tư nhân mạnh mẽ nhất.",
			image:"img/dulich.jpg",
			content:"Năm 2018, Quảng Ninh đón 12,2 triệu lượt khách du lịch và hầu hết lượng khách đều đến Hạ Long, tăng 6 lần chỉ trong vòng 4 năm. Hơn 48.000 tỉ đồng là tổng số vốn đầu tư tư nhân mà tỉnh này đã huy động được trong khoảng 4 năm đó.<br><br>Nhiều địa phương tại Việt Nam trong thời kỳ này, như Nha Trang, Đà Nẵng đã chọn một con đường khôn ngoan. Thay vì tiếp tục khuyến khích phát triển các cơ sở lưu trú nhỏ, họ tạo hành lang cho những nhà đầu tư lớn với các dự án lớn.<br><br>Con đường ven biển của Đà Nẵng, với những nhà đầu tư cả quốc tế lẫn trong nước lớn, tạo thành một chuỗi resort “tỉ đô” là một ví dụ điển hình. Sự hình thành của những dự án vốn đầu tư hàng nghìn tỉ đồng như Bà Nà Hills hay InterContinental Danang Sun Peninsula Resort trên bán đảo Sơn Trà, thay vì những tổ hợp lưu trú nhỏ theo thông lệ của các “khu du lịch”, cũng được chỉ ra là những quyết định đúng đắn.<br><br>Các nhà đầu tư như Sun Group đã khiến cho du lịch đi xa hơn rất nhiều so với “ngủ trọ”. Không chỉ là lưu trú, Đà Nẵng đang trở thành tâm điểm du lịch quốc gia nhờ vào đầu tư cho các trải nghiệm, từ Lễ hội pháo hoa Đà Nẵng cho đến carnival đường phố và những hoạt động nghệ thuật trình diễn quy mô trên đỉnh Bà Nà.<br><br>Tuy nhiên, cuộc cất cánh muộn khiến cho hạ tầng du lịch ở Việt Nam đến lúc này vẫn được nhận định là thiếu, so với tiềm năng của quốc gia. Ngay cả các đại diện của ngành du lịch cũng tự nhìn nhận rằng du lịch Việt Nam đang “quá đơn điệu”.<br><br>Mặt khác, theo xếp hạng gần đây của Diễn đàn kinh tế thế giới (WEF), Việt Nam đứng thứ 67/136 quốc gia về năng lực cạnh tranh trong lĩnh vực du lịch và lữ hành, trong đó chỉ số về nguồn nhân lực và thị trường lao động được xếp hạng 37, trên nhiều nước trong khu vực như Thái Lan (40), Philippines (50), Indonesia (64), Lào (65) Campuchia (110).",
			titleimg:"Sun World Halong Complex",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Giảm 1 triệu khi đăng ký tour Australia vào dịp Giáng Sinh",
			titlecontent:"Chương trình giảm giá của Tugo chỉ áp dụng cho khách hàng đăng ký theo đoàn từ 2 người trở lên tour Australia tuyến Sydney - Melbourne 5 ngày 4 đêm có lịch khởi hành vào ngày 9.12 và thanh toán đầy đủ giá trị tour.<br><br>Giá tour: 38,9 triệu đồng<br><br>Giá khuyến mãi: 37,9 triệu đồng",
			image:"img/dulich2.jpg",
			content:"Hiện nay nhằm đáp ứng nhu cầu du lịch Australia của du khách vào dịp lễ Giáng sinh, công ty Tugo dành tặng nhiều suất khuyến mãi cho các du khách yêu thích đất nước của những chú chuột túi. Chương trình áp dụng cho các khách hàng đặt tour Australia tuyến Sydney - Melbourne 5 ngày 4 đêm theo đoàn từ 2 người trở lên có lịch khởi hành vào ngày 21.12 và thanh toán đầy đủ giá trị tour trước ngày 8.11, cộng với hoàn tất đầy đủ các hồ sơ liên quan đến tour du lịch. Theo đó khách hàng sẽ được sẽ được giảm 1 triệu đồng tại thời điểm hoàn tất thanh toán tour.<br><br>Giá tour đã bao gồm vé máy bay khứ hồi, khách sạn 4 sao theo tiêu chuẩn quốc tế, xe du lịch đưa đón đoàn theo chương trình, phí tham quan, phí visa, các bữa ăn trong suốt chuyến đi và bảo hiểm du lịch với mức đền bù đến 10,000 USD/khách (tương đương 230 triệu đồng).<br><br>Sydney là thành phố hiện đại bậc nhất của Australia với nhiều tòa cao ốc. Một trong những điểm dừng chân nổi tiếng của thành phố là nhà hát con sò Opera Sydney và cầu Sydney Harbour lung linh về đêm.<br><br>Nếu thành phố Sydney của Australia là một trong những thành phố sôi động và hiện đại bậc nhất thì Melbourne lại mang một vẻ đẹp yên bình và cổ điển. Có rất nhiều điểm tham quan mà du khách nên dừng chân khi đến Melbourne như thư viện quốc gia Victoria, ga xe lửa phố Flinders, nhà thờ thánh Paul và Quảng trường Federation.",
			titleimg:"Thư viện quốc gia Victoria Melbourne<br>Ảnh: Tim Mac Rae/Flickr",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Những quốc gia đáng đến một lần trong đời",
			titlecontent:"Những đất nước này được đánh giá cao bởi phong cảnh ngoạn mục, nền văn hóa đa dạng, để lại ấn tượng khó quên trong lòng du khách.",
			image:"img/dulich1.jpg",
			content:"Khởi hành từ Seoul, bạn sẽ thưởng thức bữa trưa trước khi đến Ga Gimyujeong để đi xe đạp đường sắt, nơi bạn sẽ ngắm những ngọn đồi và những thắng cảnh tuyệt đẹp trôi qua. Sau đó ra đảo Nami xinh đẹp, khung cảnh thiên nhiên tại đây là nơi quay nhiều bộ phim truyền hình Hàn Quốc nổi tiếng! Sau đó, thẳng tiến đến Petit France, một ngôi làng văn hóa Pháp quyến rũ nằm trong khung cảnh Hàn Quốc rực rỡ.,<br><br>",
			titleimg:"Tản bộ trong Garden of Morning Calm và cảm nhận sự thư thái hoàn toàn trong khuôn viên bao quanh bởi cây xanh",
		},
		{
			id:id++,
			title:"Bán đảo Sơn Trà: Cấp thẻ tham quan; cấm xe tay ga thì đi lộ trình nào?",
			titlecontent:"Du khách di chuyển bằng xe tay ga và xe du lịch khi tham quan bán đảo Sơn Trà phải gởi xe và sử dụng xe trung chuyển. Tất cả người lên xuống nơi đây sẽ được cấp thẻ tham quan theo các diện khác nhau.",
			image:"img/dulich3.jpg",
			content:"Để quản lý các phương tiện, du khách nhằm đảm bảo an toàn, từ 7 giờ 30 đến 19 giờ trong ngày, du khách được phép tham quan bán đảo Sơn Trà với 3 tuyến cụ thể: Nút giao đường Hoàng Sa - Cây Đa di sản; đường Yết Kiêu - Đỉnh Bàn Cờ - Bãi Bắc; đường Yết Kiêu - Suối Ôm.<br><br>Tại các điểm xuất phát, du khách có thể sử dụng các phương tiện giao thông trừ xe tay ga và ô tô (trên 24 chỗ ngồi).<br><br>Du khách khi đi 2 loại phương tiện này bắt buộc phải gởi xe tại bãi xe trung chuyển ở ngã ba đường Hoàng Sa - Lê Đức Thọ để đi tham quan bằng xe trung chuyển.<br><br>Cụ thể, thẻ màu vàng dành cho các hộ dân có hoạt động sản xuất trồng rừng nằm trong khu vực sau gác chắn (chỉ cấp thẻ cho những người thực tế có hoạt động lâm nghiệp); nhiếp ảnh gia, sinh viên thực tập, nghiên cứu sinh, người thực hiện các hoạt động nghiên cứu khoa học… dài ngày đã được kiểm duyệt.<br><br>Vào cuối tháng 8.2019, một nhóm du khách gồm 4 người (2 nam, 2 nữ) cắt rừng để đến tham quan tại Mũi Nghê và đi lạc khiến một thợ câu cá trong lúc ứng cứu đã trượt chân dẫn đến tử vong.",
			titleimg:"Sơn Trà luôn là điểm đến hấp dẫn đối với du khách, thế nhưng nơi đây cũng đầy những hiểm nguy.<br>Ảnh: Huy Đạt",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
				{
			id:id++,
			title:"Tại sao Singapore cấm nhai kẹo cao su?",
			titlecontent:"Cấm bán kẹo cao su là một luật nổi tiếng của Singapore trên thế giới được áp dụng vào năm 1990. Bạn có thể bị phạt ở mức 1.000 đô la Singapore và lao động công ích trong 10 giờ.",
			image:"img/dulich4.jpg",
			content:"Singapore chính thức áp dụng lệnh cấm nhai kẹo cao su cũng như bán kẹo vào những năm 1990 với mục đích làm sạch đường phố. Ban đầu sắc lệnh này được giới báo chí quốc tế quan tâm và khiến họ tốn rất nhiều giấy mực.<br><br>Tuy nhiên vào năm 2004, đảo quốc này đã nới lỏng quy định khi chính thức ký hiệp định thương mại tự do Singapore – Mỹ.<br><br>Việc bán và sử dụng các loại kẹo cao su có những lợi ích cho sức khỏe như kẹo cao su nha khoa, kẹo cao su nicotine để cai thuốc lá và kẹo cao su không đường được cho phép. Tuy bị cấm ăn kẹo cao su tại Singapore, bạn có thể mua và đem về nhà.<br><br>Ông Lý Quang Diệu, thủ tướng đầu tiên của Singapore đã theo đuổi chính sách cấm kẹo cao su vào những năm 1980. Vào thời gian đó, chính phủ Singapore bắt đầu áp dụng một vài biện pháp kiểm soát kẹo cao su bao gồm các biện pháp truyền thông trên truyền hình.<br><br>Theo Cục nhà ở và phát triển Singapore, hằng năm cơ quan này đã phải chi ra 150.000 đô Sing (tương đương 2,5 tỷ đồng) để dọn dẹp bã kẹo cao su trên đường phố, xung quanh các căn hộ, thậm chí ngay cả trên ghế ngồi của phương tiện công cộng.<br><br>Ban đầu ông Lý Quang Diệu phản đối lệnh cấm tuyệt đối về việc nhai kẹo, và cho rằng việc cấm là quá vội vàng, có thể chỉnh sửa hành vi của người dân qua việc phổ biến và phạt hành chính cho những lần tái phạm.<br><br>Nhưng mọi thứ thay đổi vào năm 1987, với việc đưa vào hoạt động hệ thống tàu điện cao tốc (MRT), nhiều người dân khi đi tàu đã dính bã kẹo cao su trên cảm biến tàu khiến cửa tàu bị lỗi và chuyến tàu bị gián đoạn. Từ đó, kẹo cao su bị cấm hoàn toàn trên đảo quốc Sư tử.<br><br>Vào năm 1992, lệnh cấm được phổ biến và đưa vào thi hành, nhận được rất nhiều phản ứng trái chiều từ dư luận. Với những người ủng hộ dự luật, họ vui mừng vì luật sẽ giúp thành phố sạch đẹp và những người công nhân vệ sinh không chịu cảnh phải tham gia vào các công việc gỡ kẹo cao su.<br><br>Còn đối với người phản đối, họ thậm chí vượt biên qua Malaysia tới Johor Bahru để mua kẹo cao su. Tuy nhiên, chính phủ Singapore không cấm việc này.",
			titleimg:"Năm 1992, lệnh cấm kẹo cao su được phổ biến và đưa vào thi hành ở Singapore",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
						{
			id:id++,
			title:"Giảm 1 triệu đồng cho 15 khách hàng đầu tiên đăng ký tour Hàn Quốc",
			titlecontent:"Chương trình khuyến mãi giảm đến 1 triệu đồng của Công ty Du lịch Tugo áp dụng cho 15 khách hàng đầu tiên đăng ký tour Hàn Quốc tuyến Seoul - Nami - Everland.",
			image:"img/dulich5.jpg",
			content:"Mùa đông là thời điểm thích hợp để du lịch Hàn Quốc và tham gia các hoạt động du lịch vào mùa đông thú vị. Nhằm đáp ứng nhu cầu của khách hàng, Công ty du lịch Tugo dành tặng nhiều suất khuyến mãi cho tour du lịch Hàn Quốc. Theo đó 15 khách hàng đầu tiên đăng ký tour Hàn Quốc tuyến Seoul - Nami - Everland 4 ngày 4 đêm bay hãng hàng không T’WAY có lịch khởi hành là ngày 20 và ngày 24.11 sẽ được giảm 1 triệu đồng. Đặc biệt hơn, các khách hàng trên 50 tuổi khi đăng ký tour sẽ được giảm thêm 1 triệu đồng tại thời điểm đăng ký.<br><br>Giá tour bao gồm vé máy bay khứ hồi từ TP.HCM tới Hàn Quốc, khách sạn 4 sao theo tiêu chuẩn quốc tế, phí ăn uống, tham quan, xe du lịch đưa đón tận nơi, bảo hiểm du lịch với mức đền bù lên tới 200 triệu đồng/khách.<br><br>Không chỉ mùa thu, mùa đông cũng là thời điểm thích hợp để du lịch Hàn Quốc. Khi trời lạnh, du khách có thể ngắm nhìn những điểm tham quan phủ trong tuyết trắng hay tham gia các môn thể thao mùa đông. Trượt tuyết là hoạt động được nhiều du khách yêu thích khi tới xứ sở kim chi. Vào mùa đông, đảo Nami với những hàng cây phủ đầy tuyết trắng là điểm đến lý tưởng để ngắm nhìn khung cảnh lãng mạn. Ngoài ra, du khách cũng có thể trải nghiệm trượt tuyết tại các công viên giải trí nổi tiếng của Hàn Quốc như Lotte World và Everland. Các món ăn như hạt dẻ, khoai nướng, thịt nướng hay tobokki cũng làm cho chuyến đi Hàn Quốc trở nên thú vị hơn.",
			titleimg:"Vẻ đẹp tĩnh lặng của làng cổ Hanok Bukcheong vào mùa đông",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
	],
	tinnong :[
			{
			id:id++,
			title:"Thượng tọa Thích Nhật Từ nói gì về việc TS Dương Ngọc Dũng được cho xúc phạm Phật giáo?",
			titlecontent:"Dư luận đang dậy sóng vì loạt video chia sẻ phát ngôn gây sốc của tiến sĩ Tôn giáo học Dương Ngọc Dũng.",
			image:"img/tinnong.jpg",
			content:"Trên mạng xã hội, các đoạn clip về phát ngôn của tiến sĩ Dương Ngọc Dũng đang được lan truyền mạnh mẽ kèm theo làn sóng phản đối gay gắt. Theo đó, những nội dung này được cắt ngắn thành nhiều phần, chứa những phát ngôn nhạy cảm.<br><br>Cụ thể, giảng viên Trường đại học Khoa học xã hội & Nhân văn TP.HCM có những phát ngôn liên quan đến Phật giáo Việt Nam: “Cao tăng Việt Nam thì lại khác. Không giận nhưng chủ yếu là selfie. Họp không lo họp, lo chụp hình không. Tôi nói, nếu mà bạn đang đi tu thì selfie làm cái gì. Ở nhà nuôi mẹ, cùng lắm là cho ăn chứ gì nữa, cơm chiên Dương Châu, hủ tiếu Nam Vang là cùng. Còn vô chùa tụng “Nam mô bổn sư Thích ca Mâu ni Phật…”. Trời, bố mẹ nói có phước. Kiếp sau sinh vô làm con của Bill Gates luôn. Có phải sướng không? Ăn ba cái hủ tiếu Nam Vang, cơm chiên Dương Châu làm gì? Cùng lắm anh nuôi bố mẹ như nuôi con heo thôi, còn tôi vô chùa, tôi cạo đầu, tôi tụng kinh, không những bố mẹ mà cả dòng họ, tổ tiên đều phước đức hết… Còn trốn trong chùa làm gì, gõ mõ tụng kinh rồi ăn của bá tánh người ta lại cúng dường. Lợi dụng sự ngu dốt của bá tánh, mang lại cúng xôi, cúng oản, rồi ngồi đó ăn uống, rồi thuyết minh chuyện tào lao”...<br><br>Trước những phát ngôn trên, Đại đức Thích Viên Hải, Trưởng ban Thông tin Truyền thông Giáo hội Phật giáo Việt Nam tỉnh Quảng Nam đã ký thư kêu gọi chữ ký Phản đối phát ngôn miệt thị Phật giáo của ông Dương Ngọc Dũng. Nội dung thư cho rằng hành vi của TS Tôn giáo học Dương Ngọc Dũng là “bôi nhọ, xúc phạm danh dự, quy chụp và miệt thị cộng đồng Phật giáo và những người tu hành chân chính, gây hoang mang trong niềm tin của tín đồ Phật tử”. Ngoài ra, Đại đức Thích Viên Hải cũng nhấn mạnh những phát ngôn của ông Dũng đang làm nhận thức sai lệch về tinh thần từ bi trí tuệ và truyền thống tốt đẹp của Phật giáo Việt Nam.<br><br>Trước làn sóng phản đối gay gắt, cựu sinh viên Trường đại học Harvard (Mỹ) đã gửi lời xin lỗi trên trang cá nhân. Theo đó, ông Dương Ngọc Dũng nhận lỗi vì có những phát ngôn thiếu chuẩn mực và khẳng định các nội dung được chia sẻ hoàn toàn “bị cắt xén” gây sai lệch thông tin và tổn thương đến những tăng ni Phật tử tu hành chân chính.<br><br>Mới đây, Thượng tọa Thích Nhật Từ, trụ chì chùa Giác Ngộ đã lên tiếng về vụ việc trong chương trình giao lưu Đoàn hành hương đạo Phật ngày nay. Thượng tọa cho rằng: “Tôi cho đây là một điều rất là đáng tiếc. Lẽ ra, điều đó không nên xảy ra với một người có học thức, có trình độ tiến sĩ như ông Dương Ngọc Dũng. Chuyện đó xảy ra như vậy là quá dở. Nó để lại một vết nhơ trong cuộc đời và sự nghiệp làm nhà giáo của ông ở cấp đại học”.<br><br>Chia sẻ về thái độ bỡn cợt của ông Dũng khi kể chuyện một số cao tăng, hòa thượng nước ngoài đi cùng “bầu đoàn thê tử” trong đoạn video gây tranh cãi, Trụ trì chùa Giác Ngộ cho biết: “Việc cho rằng các vị cao tăng của Phật giáo nước ngoài đi cùng với bầu đoàn thê tử, ông ấy giả vờ đóng kịch là mình nói lộn rồi sau đó xin lỗi để nói lại. Thay vì nói Phật tử thì ông ấy nói là bầu đoàn thê tử. Thê là vợ, tử là con. Tôi cho rằng ác ý này, sự thiếu thiện chí này là rất nghiêm trọng, không thể chấp nhận được với một diễn giả, một giảng viên đại học của Trường đại học Khoa học Xã hội & Nhân văn TP.HCM. Trường vốn nổi tiếng về nhân văn, về phong cách đạo đức chuẩn mực của một con người. Một nhà giáo đứng trước đối tượng thánh chúng, mà tạo ra sự bỡn cợt có dụng ý chứ không phải vô tình. Tôi cảm thấy lấy làm tiếc cho ông ấy”.<br><br>Ngoài ra, thầy Thích Nhật Từ cũng thẳng thắn bày tỏ: “Theo nhận định của tôi, đây là một thái độ bỡn cợt mang ý xúc phạm đến các bậc cao tăng. Tôi khuyên ông Dương Ngọc Dũng nên xin lỗi những vị cao tăng mà ông ấy đã đề cập đến với sự bỡn cợt cùng dụng ý rất là xấu, “thê tử” (nghĩa là vợ con). Đây là một điều mà người bình thường không nên bỡn cợt huống hồ là một diễn giả, một học giả, một tiến sĩ dạy cấp đại học. Nếu mà ông ấy chối từ việc xin lỗi thì sẽ làm cho uy tín của ông ấy ngày thêm thuyên giảm thôi. Cái vụ này làm cho ông ấy bị đánh giá rất tiêu cực. Tôi rất mong sao đừng có vì mình có được cơ hội có mặt trong một diễn đàn lớn của Phật giáo thế giới, không tiếp nhận được cái hay, cái tích cực mà lại biến nó thành cơ hội bỡn cợt sau đó…”.",
			titleimg:"Thượng tọa Thích Nhật Từ cho rằng phát ngôn gây sốc của ông Dương Ngọc Dũng là thiếu chuẩn mực<br>",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"'Nợ' ngàn tỉ công trình cầu vượt Ngã ba Huế, Đà Nẵng kiến nghị Thủ tướng",
			titlecontent:"Công trình cầu vượt Ngã ba Huế đã đưa vào sử dụng 4 năm qua nhưng vẫn chưa thanh toán cho nhà đầu tư, UBND TP.Đà Nẵng đã có văn bản kiến nghị Thủ tướng có chỉ đạo tháo gỡ.",
			image:"img/tinnong1.jpg",
			content:"Ngày 6.11, UBND TP.Đà Nẵng cho biết, Chủ tịch UBND TP Huỳnh Đức Thơ vừa có văn bản gửi Văn phòng Chính phủ đề nghị giải quyết vướng mắc trong việc thanh toán đối với dự án nút giao thông khác mức Ngã ba Huế (còn gọi là cầu vượt Ngã ba Huế ).<br><br>Theo văn bản, dự án cầu vượt Ngã ba Huế đã được Bộ GTVT phê duyệt dự án điều chỉnh theo hình thức hợp đồng BT với giá trị hợp đồng của dự án là 2.379 tỉ đồng; bố trí vốn hoàn trả cho nhà đầu tư từ kế hoạch ngân sách hàng năm của Bộ GTVT, bắt đầu từ năm 2017 - 2020.<br><br>Dự án đã hoàn thành và đưa vào khai thác, sử dụng từ năm 2015, tuy nhiên đến nay vẫn chưa thực hiện thanh toán cho nhà đầu tư.<br>Để hạn chế việc chậm thanh toán làm ảnh hưởng đến hoạt động tài chính của nhà đầu tư cũng như ngân hàng và phát sinh lãi vay trong thời gian chờ thanh toán, UBND TP.Đà Nẵng đề nghị Văn phòng Chính phủ xem xét, đề xuất Thủ tướng Chính phủ các nội dung.<br>Cụ thể, đối với phần kinh phí gần 554 tỉ đồng đã được bố trí trong kế hoạch đầu tư công trung hạn giai đoạn 2016 – 2020 của Bộ GTVT, theo UBND TP Đà Nẵng, Bộ KH-ĐT đã có quyết định giao chi tiết kế hoạch đầu tư công trung hạn vốn ngân sách T.Ư giai đoạn 2016 – 2020 (đợt 5) của Bộ GTVT, trong đó bố trí gần 33 tỉ đồng để thanh toán cho dự án cầu vượt Ngã ba Huế. Tuy nhiên, đến nay nhà đầu tư vẫn chưa được thanh toán do các vướng mắc liên quan đến thủ tục thanh toán (UBND TP.Đà Nẵng là cơ quan ký kết hợp đồng BT, song nguồn vốn thanh toán được cấp có thẩm quyền phê duyệt bố trí trong kế hoạch đầu tư công trung hạn của Bộ GTVT).<br>Đối với phần kinh phí còn lại 521 tỉ đồng được bố trí từ 10% dự phòng vốn T.Ư giai đoạn 2016 - 2020 của Bộ GTVT để thanh toán cho dự án, UBND TP.Đà Nẵng đề nghị Thủ tướng Chính phủ chỉ đạo Bộ GTVT phối hợp với các bộ, ngành liên quan sớm hoàn tất các thủ tục để phân bổ vốn chi tiết và thanh toán toàn bộ cho nhà đầu tư trong năm 2020 nhằm giải quyết khó khăn cho nhà đầu tư. Đối với phần kinh phí còn lại của dự án cầu vượt Ngã ba Huế, khoảng 1.825 tỉ đồng, UBND TP.Đà Nẵng đề nghị Thủ tướng Chính phủ xem xét bố trí thanh toán cho dự án từ nguồn vốn dự phòng chung vốn ngân sách T.Ư của cả nước trong kế hoạch trung hạn giai đoạn 2016 - 2020 theo nội dung nghị quyết số 84/2019/QH14 ngày 14.6.2019 của Quốc hội, như đề xuất của Bộ KH-ĐT.",
			titleimg:"Cầu vượt Ngã ba Huế vận hành đã hơn 4 năm qua<br>Ảnh: Nguyễn Tú",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"'Đời rác'... Sài Gòn: Ly hương, mẹ mưu sinh nghề ve chai nuôi con học đại học",
			titlecontent:"Rời vùng quê nghèo khó ở Bình Định, chị Đức chấp nhận cảnh vợ chồng đôi người đôi ngả, vào Sài Gòn mưu sinh bằng nghề lượm ve chai để nuôi hai con học đại học.",
			image:"img/tinnong2.jpg",
			content:"Đi về mỗi ngày trên đường Điện Biên Phủ (Q.Bình Thạnh, TP.HCM), tôi thường gặp một nhóm người nhặt ve chai mà theo bảo vệ của một công ty sửa chữa ô tô trên đường Điện Biên Phủ miêu tả: “Mấy bả ở đây suốt, ngày nào cũng đẩy xe qua lại riết quen”.<br><br>Nhóm người nhặt ve chai có 3 người phụ nữ, dáng người nhỏ nhắn, nói giọngmiền Trung đặc sệt. Trong nhóm, người phụ nữ được gọi là Sáu, đã gắn bó với nghề lượm ve chai 8 năm qua để nuôi hai con học đại học. Chị Sáu tên thật là Nguyễn Thị Đức (47 tuổi) quê ở Phù Cát (tỉnh Bình Định), hiện ở trọ cùng 2 con gái tại một con hẻm trên đường Bùi Đình Túy (Q.Bình Thạnh, TP.HCM).<br><br>Họ tâm sự nếu chăm chỉ làm lụng thì ở quê cũng đủ ăn đủ mặc nhưng khó mà dư ra được để nuôi con học đại học. Để có thêm thu nhập, chị Đức theo những người phụ nữ cùng quê khác vào Sài Gòn, mưu sinh bằng nghề lượm ve chai. Vợ chồng chị Đức đôi người đôi ngả, người vào Sài Gòn cố gắng kiếm thêm chút tiền gửi về quê, người ở nhà ở nhà chăm lo con cái.<br><br>Chị Đức vỗ vỗ tay vào chiếc xe đẩy nhỏ màu xanh đã khá cũ và khoe rằng đây là tài sản lớn nhất của chị. Vào Sài Gòn chỉ với một ít lộ phí và vài bộ quần áo, những ngày đầu chị Đức ở tập thể tại vựa ve chai cùng với... đồng nghiệp. Chiếc xe đẩy cũng do chủ vựa giúp đỡ. Thế rồi, chị Đức bắt đầu những tháng ngày rong ruổi khắp Sài Gòn. Chị mua lại ve chai từ nhà dân, nhặt chai lọ thấy trên đường rồi cân bán lại cho vựa ve chai kiếm tiền.<br><br>",
			titleimg:"Chị Đức đến vựa ve chai để cân bán khi xe đã đầy<br>Ảnh: Lê Hồng Hạnh",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Bệnh viện Từ Dũ cho sản phụ nghe nhạc khi sinh con bằng phương pháp mổ",
			titlecontent:"Đây là một trải nghiệm khá mới mẻ và đầy bất ngờ với các sản phụ đến Bệnh viện Từ Dũ sinh con bằng phương pháp mổ.",
			image:"img/tinnong3.jpg",
			content:"Ngày 6.11, lãnh đạo Bệnh viện Từ Dũ TP.HCM cho biết bệnh viện bắt đầu triển khai chương trình “nghe nhạc trong khi được mổ”. Theo đó, những sản phụ sinh con bằng phương pháp gây tê để mổ, bệnh viện sẽ cho sản phụ phụ trải nghiệm nghe nhạc bằng cách đeo tai phone. Đó là các bản nhạc hòa tấu êm dịu.<br><br>Hiện nay Bệnh viện Từ Dũ đã có 5 phòng mổ được trang bị tai nghe cho sản phụ khi phẫu thuật. Dự kiến sẽ có 15 tai nghe được trang bị. Sản phụ được tư vấn về việc sử dụng tai nghe nhạc khi mổ gây tê với các ích lợi của nó.<br><br>Theo lãnh đạo Bệnh viện Từ Dũ, việc cho sản phụ nghe nhạc qua tai phone để lắng dịu tâm hồn, làm giảm đi lo âu trong lúc phẫu thuật, vì tâm trạng bất an có thể làm sản phụ tăng huyết áp, tăng nhịp tim... Đây là một trong những cải tiến mới nhằm đem đến trải nghiệm êm ái cho sản phụ sinh mổ tại Bệnh viện Từ Dũ. Việc cho thai phụ sinh con nghe nhạc thay vì nghe tiếng loảng xoảng của dụng cụ phẫu thuật, nghe tiếng tít tít của máy móc… là điều khá bất ngờ với các sản phụ.<br><br>Khi con khóc chào đời, tai nghe được tháo ra để mẹ nghe thấy tiếng khóc con, biết con khỏe mạnh. Sau đó, khi đang được da kề da, nhạc sẽ lại ngân nga để mẹ an tâm qua hết cuộc mổ.",
			titleimg:"Sản phụ vừa sinh con vừa nghe nhạc.<br>ẢNH: BVCC",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
				{
			id:id++,
			title:"Dự báo thời tiết hôm nay 6.11.2019: Bão số 6 đang hướng quần đảo Trường Sa",
			titlecontent:"Dự báo thời tiết hôm nay 6.11.2019, cơn bão số 6 đang có sức gió mạnh nhất vùng gần tâm bão mạnh cấp 8, giật cấp 10; đang di chuyển hướng quần đảo Trường Sa.",
			image:"img/tinnong4.jpg",
			content:"Dự báo thời tiết hôm nay 6.11.2019, Trung tâm Dự báo khí tượng thủy văn quốc gia, Tổng cục Khí tượng thủy văn (Bộ TN-MT) cho biết, lúc 4 giờ sáng nay, tâm bão số 6 còn có tên quốc tế là cơn bão Nakri đang ở vào khoảng 13,5 độ vĩ bắc và 116,2 độ kinh đông, cách đảo Song Tử Tây, quần đảo Trường Sa khoảng 310 km về phía bắc đông bắc.<br><br>Vùng gần tâm bão, sức gió mạnh nhất ở cấp 8, tương đương sức gió từ 60 - 75 km/giờ, giật cấp 10. Theo đó, vùng biển gió mạnh từ cấp 6, giật từ cấp 8 trở lên có bán kính khoảng 100 km tính từ tâm bão.<br><br>Dự báo trong 24 giờ tới, bão di chuyển chậm về phía đông, mỗi giờ đi được khoảng 5 km và có khả năng mạnh thêm. Đến 4 giờ ngày 7.11, vị trí tâm bão ở khoảng 13,2 độ vĩ bắc và 116,9 độ kinh đông, cách đảo Song Tử Tây khoảng 330 km về phía đông bắc. Sức gió mạnh nhất vùng gần tâm bão mạnh cấp 9, tương đương sức gió từ 75 - 90 km/giờ, giật cấp 11.<br><br>Trung tâm Dự báo khí tượng thủy văn quốc gia cảnh báo, trong 24 giờ tới, do ảnh hưởng của bão và không khí lạnh, trong 24 giờ tới vùng nguy hiểm trên Biển Đông có bán kính gió mạnh từ cấp 6, giật từ cấp 8 trở lên là phía Bắc vĩ tuyến 11,5 độ vĩ bắc và phía đông kinh tuyến 112,0 độ kinh đông.Trong 24 đến 48 giờ tiếp theo, bão di chuyển chậm về phía nam, sau có khả năng đổi hướng di chuyển về phía tây, mỗi giờ đi được khoảng 5 km và có khả năng mạnh thêm. Đến 4 giờ ngày 8.11, vị trí tâm bão ở khoảng 12,9 độ vĩ bắc và 116,1 độ kinh đông, cách đảo Song Tử Tây khoảng 280 km về phía đông bắc. Vùng gần tâm bão, sức gió mạnh nhất vùng gần tâm bão mạnh nhất tăng lên cấp 10, tương đương sức gió từ 90 -100 km/giờ, giật cấp 12.",
			titleimg:"Bão số 6 đang tiếp tục mạnh lên và hướng về khu vực quần đảo Trường Sa<br>Ảnh Trung tâm Dự báo khí tượng thủy văn quốc gia",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
	],
	quantam :[
		{
			id:id++,
			title:"Nữ trưởng phòng ở Đắk Lắk mượn bằng học thạc sĩ: Đào tạo thạc sĩ ngày càng dễ dãi?",
			titlecontent:"Chuyện Trưởng phòng Hành chính - quản trị của Văn phòng Tỉnh ủy Đắk Lắk mượn bằng tốt nghiệp THPT của chị gái để học xong bằng thạc sĩ là minh chứng cho tình trạng tuyển sinh và đào tạo thạc sĩ hiện nay ở VN đang có rất nhiều vấn đề.",
			image:"img/quantam.jpg",
			content:"Theo thông tin, bà Trần Thị Ngọc Ái Sa (giả) đã mượn bằng tốt nghiệp THPT của chị học trung cấp kế toán. Sau đó, người này dùng bằng trung cấp để đăng ký học ĐH từ xa ngành kế toán. Từ bằng tốt nghiệp ĐH, bà Sa (giả) lại tiếp tục nộp hồ sơ học thạc sĩ theo chương trình liên kết giữa Học viện Tài chính và Trường ĐH Tây Nguyên.<br><br>Theo trưởng phòng sau ĐH của một trường ĐH công lập lớn tại TP.HCM, tình trạng này gọi là “tẩy bằng” và hiện nay khá phổ biến trong cán bộ công chức. Nghĩa là rất nhiều người đi học cử nhân ĐH tại chức, từ xa, sau đó học thạc sĩ. Thạc sĩ chỉ có chính quy, còn mức độ đào tạo khó hay dễ tùy trường. Cứ đăng ký học trường nào đào tạo dễ sẽ “tẩy bằng” nhanh chóng.<br><br>Cũng theo vị trưởng phòng này, điều kiện học thạc sĩ hiện nay cứ tốt nghiệp cử nhân là được, không phân biệt tại chức, từ xa, chính quy… Ngày trước, số trường đào tạo thạc sĩ ít, người học nhiều nên tuyển đầu vào khó. Trong vòng 5 năm trở lại đây, số lượng trường được đào tạo thạc sĩ nhiều hơn nên tuyển đầu vào rất dễ dàng. Vì vậy, bức tranh “tréo ngoe” hiện nay là trường công lập có uy tín lại đang gặp khó khăn trong đào tạo thạc sĩ vì đầu vào khó, đầu ra cũng khó.<br><br>“Hiện nay, muốn liên kết đào tạo thạc sĩ ngoài cơ sở thì chỉ được đào tạo tại khu vực Tây nguyên, Tây Bắc, Tây Nam bộ. Nhưng không hiểu sao rất nhiều trường phía bắc vào TP.HCM, Tây Nam bộ đào tạo? Lẽ ra đây là nhiệm vụ của các trường ĐH phía nam vì năng lực thừa sức nhưng không hiểu sao các đơn vị ở các tỉnh lại chọn trường ngoài bắc?”, vị trưởng phòng này đặt câu hỏi.<br><br>Tiến sĩ một trường ĐH công lập khác tại TP.HCM cũng cho biết trường này năm ngoái tuyển được 18 học viên chương trình cao học nhưng năm nay tuyển không được. Nguyên do vì trường tuyển đầu vào, xét đầu ra khó khăn, có nhiều quy định đảm bảo chất lượng, trong khi nhiều chương trình liên kết thạc sĩ đào tạo lại quá dễ dàng nên người học đã chọn những nơi “thuận lợi”.Để chứng minh cho việc đào tạo dễ dàng này, tiến sĩ trên cho biết mới tuần trước, một trường ĐH ở Hà Nội mời ông đi dạy lớp thạc sĩ ở tỉnh Bình Phước. Môn học của ông theo quy định là 45 tiết, dự kiến dạy trong 2 tuần mới hoàn thành. Tuy nhiên, trường đề nghị ông hoàn thành tất cả trong 1 tuần!<br><br>Ông cũng cho biết việc học thạc sĩ không như ngày xưa nữa. Giảng viên phần nhiều mang tính chất hỗ trợ học viên hoàn thành chương trình. Luận văn học viên nhờ làm thuê rất nhiều. Việc bảo vệ thạc sĩ ở một trường chia ra làm nhiều đợt. Có khi cả mấy tháng mới có một đợt, không có tính chất tập trung, vì vậy rất khó phát hiện những người làm gian dối.<br><br>Trưởng phòng sau ĐH một trường công lập tại TP.HCM còn cho biết không chỉ đề nghị rút thời gian môn học từ 2 tuần xuống 1 tuần (4 buổi/tuần), ông còn nhận được đề nghị từ học viên và nơi đào tạo rút xuống chỉ còn 1 ngày.<br><br>Tiến sĩ Hồ Xuân Mai, phụ trách bộ môn ngôn ngữ học, Viện Khoa học xã hội vùng Nam bộ, cũng cho biết: “Đào tạo thạc sĩ hiện nay có rất nhiều kẽ hở như tuyển đầu vào sai chuyên ngành. Về nguyên tắc, cao đẳng không được thi vào cao học nhưng nhiều trường vẫn nhận, cho học bù vài môn để hợp thức hóa. Việc đào tạo thạc sĩ nhiều quá, chất lượng nhiều nơi rất kém”.",
			titleimg:"Thực tế đào tạo cao học vẫn để “lọt sổ” những học viên không đảm bảo chất lượng<br>Ảnh: Đào Ngọc Thạch",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Thạc sĩ điều hành cấp cao (EMBA) - Khóa học dành cho lãnh đạo",
			titlecontent:"UQAM EMBA - Khóa học Thạc sĩ điều hành cao cấp là chương trình được xây dựng cho người ở độ tuổi 30-40, có hơn 8 năm kinh nghiệm và có ít nhất 2 năm ở vị trí quản lý.",
			image:"img/quantam1.jpg",
			content:"Bên cạnh đội ngũ giảng viên có học hàm vị từ tiến sĩ trở lên đến từ Úc, Mỹ, Canada đến từ UQAM là những chuyên gia trong từng lĩnh vực, người học còn được chia sẻ những kinh nghiệm quý báu từ chính bạn học, cũng là những người đang điều hành doanh nghiệp.<br><br>Khóa học sẽ giúp học viên nâng cao năng lực phát triển chiến lược kinh doanh, xây dựng các chương trình hành động cụ thể hướng đến mục tiêu tăng trưởng bền vững cho doanh nghiệp, giúp học viên ứng dụng các công cụ quản lý mới nhất, hiệu quả nhất vào lĩnh vực marketing, tài chính, sản xuất, nhân sự và chiến lược, giúp học viên hiểu được vai trò và tầm quan trọng của công nghệ cho sự phát triển và thành công, giúp nâng cao năng lực cạnh tranh của doanh nghiệp trong nước, khu vực và quốc tế.",
			titleimg:"Lễ tốt nghiệp UQAM EMBA khóa 6 năm học 2019",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"ĐH Western Sydney vào top 300 ĐH tốt trên toàn cầu, hướng đến ASEAN",
			titlecontent:"Bảng xếp hạng danh tiếng The Higher Educations (THE) vừa công bố đánh giá mới nhất, theo đó ĐH Western Sydney (Úc) lọt vào top 300 ĐH tốt nhất toàn cầu trong hơn 20.000 trường khắp thế giới.",
			image:"img/quantam2.jpg",
			content:"GS Yi-Chen Lan - Phó hiệu trưởng Phụ trách Quốc tế ĐH Western Sydney (Úc) - đã thông báo thứ hạng mới này với đối tác quan trọng của trường tại Việt Nam là Viện ISB (ĐH Kinh tế TP.HCM) trong chuyến công tác vừa qua tại TP.HCM.<br><br>“Dù tuổi đời chỉ 30 năm, ĐH Western Sydney đã có những bước tiến đáng kể khi lần lượt vào lọt vào các top 500, 400 và vừa qua là 300 theo đáng giá của THE”, GS Yi-Chen Lan nói - “Bảng xếp hạng này cũng ghi nhận ĐH Western Sydney đứng hạng 7 trong danh sách các ĐH để lại tác động tích cực cho xã hội, khi là một trong những đơn vị luôn theo đuổi các chỉ số phát triển bền vững của Liên Hiệp Quốc”.<br><br>Theo GS Yi-Chen Lan, đây là thành công từ những nỗ lực rất lớn trong việc hướng đến 48.000 sinh viên đang học tập tại trường, trong đó có đến 6.000 sinh viên quốc tế. Đó là chưa kể các bạn trẻ đang theo học các chương trình liên kết của ĐH Western Sydney ở nhiều nơi trên thế giới, trong đó có Viện ISB của Việt Nam.<br><br>Trước đó, trong chuyến làm việc với Viện ISB vào tháng 8.2019, PGS Linda Taylor - Phó hiệu trưởng Trường ĐH Western Sydney cho biết, thông qua chương trình MBA Talent, Trường ĐH Western Sydney hướng đến việc biến Việt Nam nói chung và TP.HCM nói riêng thành một trung tâm đào tạo khu vực Đông Nam Á (ASEAN Hub) của trường thông qua Viện ISB.<br><br>“ĐH Western Sydney xem các chương trình hợp tác với Viện ISB của Trường ĐH Kinh tế TP.HCM là những viên gạch đầu tiên trong quá trình xây dựng một trung tâm học tập tại khu vực Đông Nam Á”, PGS Linda Taylor cho biết thêm.<br><br>Bà nói thêm: “Thời gian qua Việt Nam ngày càng chứng tỏ vai trò trở thành trung tâm học thuật của Đông Nam Á khi liên tục có học sinh đạt kết quả cao trong nhiều kỳ thi quốc tế uy tín, giành nhiều suất học bổng toàn cầu. Bên cạnh đó, các trường ĐH ở Việt Nam cũng đang không ngừng đổi mới để có thể cạnh tranh cùng các cường quốc trong châu lục. ĐH Western Sydney thông qua Viện ISB muốn đón đầu xu thế đó”.",
			titleimg:"Lãnh đạo ĐH Western Sydney trong buổi trao học bổng cho các Cử nhân kinh doanh tài năng BBUS<br>Ảnh: Long Mai",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
		{
			id:id++,
			title:"Cơ hội ‘có 1 không 2’ để TP.HCM xây dựng trung tâm tài chính",
			titlecontent:"TP.HCM hoàn toàn hội tụ đủ cơ hội để trở thành trung tâm tài chính mang tầm cỡ khu vực và thế giới.",
			image:"img/quantam3.jpg",
			content:"Phát biểu tại Diễn đàn Kinh tế TP.HCM lần thứ hai với chủ đề “Phát triển TP.HCM thành trung tâm tài chính khu vực và quốc tế” tổ chức sáng 18.10 tại TP.HCM, Bộ trưởng Bộ Kế hoạch và Đầu tư (KH-ĐT) Nguyễn Chí Dũng khẳng định trung tâm tài chính phải là đề án của quốc gia.<br>Ông Dũng đánh giá, TP.HCM đã mạnh dạn, chủ động và quyết tâm nghiên cứu, triển khai xây dựng một trung tâm tài chính, đặt nền móng cho triển vọng phát triển trung tâm tài chính của quốc gia, khu vực và thế giới. “Phải nói rằng đây không chỉ là ước mơ của cá nhân tôi, mà còn là mong đợi của rất nhiều người, của nhiều nhà đầu tư, tổ chức tài chính, doanh nghiệp và người dân Việt Nam”, ông Dũng nhấn mạnh.<br><br>Việt Nam nói chung và TP.HCM nói riêng, theo Bộ trưởng KH-ĐT đang sở hữu nhiều lợi thế tự nhiên sẵn có để phát triển các trung tâm tài chính. Ngoài ra, nếu lấy com-pa đặt tâm là TP.HCM và quay với khoảng cách khoảng 3 giờ bay, sẽ dễ dàng thấy được nó sẽ phủ một diện rộng, bao gồm các nền kinh tế năng động như: Singapore, Malaysia, Indonesia...<br><br>Bên cạnh đó, so với các tỉnh, thành phố khác trong cả nước, TP.HCM đang có điều kiện và cơ hội hiếm có để ghi tên mình trên bản đồ thị trường tài chính toàn cầu. Là một đầu tàu động lực chủ yếu của nền kinh tế Việt Nam, đóng góp khoảng 24% GDP cả nước, 1/3 ngân sách quốc gia, 27% tổng kim ngạch xuất khẩu, 22% tổng vốn FDI cả nước… Điều này cho thấy, nhu cầu hoạt động tài chính ở khu vực TP.HCM là rất lớn, là điều kiện tốt để hình thành và phát triển một trung tâm tài chính.<br><br>“Mặc dù vậy, tôi cho rằng như thế là chưa đủ. Để có thể thu hút được các nhân tài, đặc biệt là nhân tài ngành tài chính, đang làm việc tại các trung tâm tài chính Hồng Kông hay London có thể di chuyển đến sống và làm việc tại trung tâm tài chính TP.HCM thì bản thân trung tâm tài chính không những phải là một trung tâm hiện đại nhất, hạ tầng tốt nhất, kết nối rộng nhất mà còn phải trở thành một thành phố hấp dẫn nhất, có cuộc sống chất lượng nhất, môi trường sống và môi trường sinh thái an toàn, ổn định, các dịch vụ xã hội chất lượng cao được bảo đảm. Nếu chúng ta có tầm nhìn chiến lược, có bước đi cụ thể, vững chắc, tôi tin rằng, chúng ta hoàn toàn làm được điều đó”, ông Dũng bày tỏ.<br><br>Cuối cùng nhưng không kém phần quan trọng, theo Bộ trưởng Nguyễn Chí Dũng để trung tâm tài chính hoạt động thành công, cần phải có thể chế, pháp luật, chính sách có tính cạnh tranh, vượt trội so với các trung tâm tài chính khác trên thế giới. Việt Nam là quốc gia mới nổi, đi sau các quốc gia phát triển đã có sẵn các trung tâm tài chính quốc tế, chính vì lẽ đó, Việt Nam nói chung và TP.HCM cần phải hướng tới xây dựng một trung tâm tài chính có tính cạnh tranh cao, vượt trội, bám sát 5 yếu tố then chốt gồm: bảo đảm môi trường đầu tư, kinh doanh tốt; thu hút và phát triển được nguồn nhân lực ngành tài chính chất lượng cao; xây dựng hệ thống cơ sở hạ tầng đẳng cấp quốc tế; phát triển khu vực tài chính của quốc gia và thành phố lành mạnh, vững chắc; xây dựng được thương hiệu và danh tiếng tốt.<br><br>Bộ trưởng KH-ĐT đề nghị, thành phố nghiên cứu thêm phương án mở rộng về hướng nam, gồm toàn bộ diện tích tự nhiên của quận 7, huyện Nhà Bè và một phần huyện Bình Chánh, huyện Cần Giờ. Đây là khu vực có diện tích đủ lớn (khoảng 88.000 ha), có điều kiện kết nối thuận lợi về giao thông, kết cấu hạ tầng kỹ thuật - xã hội và có quỹ đất để phát triển một thành phố tài chính, thương mại, dịch vụ quốc tế, với cơ sở hạ tầng, môi trường sống đẳng cấp thế giới, bao gồm không gian làm việc, mạng viễn thông và đường bay thuận tiện phục vụ cho cuộc sống và sự phát triển của nguồn nhân lực cao, những người lựa chọn nơi đây để sống và làm việc.",
			titleimg:"Bộ trưởng Nguyễn Chí Dũng phát biểu tại diễn đàn<br>Vân Hồng",
			date: "Thứ Bảy, ngày 09/11/2019 10:12 AM (GMT+7)",
			anthor:"Theo Nguyễn Đại"
		},
	]
}

if (localStorage.getItem('congnghe') == null ) {
  localStorage.setItem('congnghe',JSON.stringify(data.congnghe));
} else {
  data.congnghe = JSON.parse(localStorage.getItem('congnghe'));
}

if (localStorage.getItem('giaoduc1') == null ) {
  localStorage.setItem('giaoduc1',JSON.stringify(data.giaoduc1));
} else {
  data.giaoduc1 = JSON.parse(localStorage.getItem('giaoduc1'));
}

if (localStorage.getItem('giaoduc') == null ) {
  localStorage.setItem('giaoduc',JSON.stringify(data.giaoduc));
} else {
  data.giaoduc = JSON.parse(localStorage.getItem('giaoduc'));
}

if (localStorage.getItem('taichinh') == null ) {
  localStorage.setItem('taichinh',JSON.stringify(data.taichinh));
} else {
  data.taichinh = JSON.parse(localStorage.getItem('taichinh'));
}

if (localStorage.getItem('vanhoa') == null ) {
  localStorage.setItem('vanhoa',JSON.stringify(data.vanhoa));
} else {
  data.vanhoa = JSON.parse(localStorage.getItem('vanhoa'));
}

if (localStorage.getItem('thethao') == null ) {
  localStorage.setItem('thethao',JSON.stringify(data.thethao));
} else {
  data.thethao = JSON.parse(localStorage.getItem('thethao'));
}
if (localStorage.getItem('xe') == null ) {
  localStorage.setItem('xe',JSON.stringify(data.xe));
} else {
  data.xe = JSON.parse(localStorage.getItem('xe'));
}

if (localStorage.getItem('dulich') == null ) {
  localStorage.setItem('dulich',JSON.stringify(data.dulich));
} else {
  data.xe = JSON.parse(localStorage.getItem('dulich'));
}

if (localStorage.getItem('tinnong') == null ) {
  localStorage.setItem('tinnong',JSON.stringify(data.tinnong));
} else {
  data.tinnong = JSON.parse(localStorage.getItem('tinnong'));
}

if (localStorage.getItem('quantam') == null ) {
  localStorage.setItem('quantam',JSON.stringify(data.quantam));
} else {
  data.quantam = JSON.parse(localStorage.getItem('quantam'));
}

var url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.24h.com.vn%2Fupload%2Frss%2Ftintuctrongngay.rss";



function listProducts(){
	if (localStorage.getItem('congnghe') == null || localStorage.getItem('giaoduc1') == null || localStorage.getItem('giaoduc') == null || localStorage.getItem('taichinh') == null || localStorage.getItem('vanhoa') == null || localStorage.getItem('thethao') == null || localStorage.getItem('xe') == null || localStorage.getItem('dulich') == null) {
	    var congnghe = this.data.congnghe;
	    var giaoduc = this.data.giaoduc;
	    var giaoduc1 = this.data.giaoduc1;
	    var taichinh = this.data.taichinh;
	    var vanhoa = this.data.vanhoa;
	    var thethao = this.data.thethao;
	    var xe = this.data.xe;
	    var dulich = this.data.dulich;
	} else {
	    var congnghe = JSON.parse(localStorage.getItem('congnghe'));
	    var giaoduc1 = JSON.parse(localStorage.getItem('giaoduc1'));
	    var giaoduc = JSON.parse(localStorage.getItem('giaoduc'));
	    var taichinh = JSON.parse(localStorage.getItem('taichinh'));
	    var vanhoa = JSON.parse(localStorage.getItem('vanhoa'));
	    var thethao = JSON.parse(localStorage.getItem('thethao'));
	    var xe = JSON.parse(localStorage.getItem('xe'));
	    var dulich = JSON.parse(localStorage.getItem('dulich'));
	}

	for (var c = 0; c < congnghe.length; c++) {
		var html = '<div class="col-lg-2">';
		html +='<div class="card">';
		html +='<img src="'+congnghe[c].image+'" style="height: 7rem;width: 100%;margin-left: 0;">';
		html +='<div class="card-body">';
		html +='<h5 class="card-title"><a href="#" onclick="page('+c+')">'+congnghe[c].title+'</a></h5>';
		html +=	'<button type="button" class="btn btn-outline-dark" id="xoa" onclick="xoac('+c+')" style="margin-right: 34px;line-height: 0px;height: 34px;">Xoá</button>';
		html += '<button type="submit" class="btn btn-outline-dark" id="sua"  onclick="editc('+c+') " style="line-height: 0px;height: 34px;">Sửa</button>';
		html +='</div>';
		html +='</div>';

		document.getElementById('congnghe').innerHTML += html;
		document.getElementById('congngheql').innerHTML += html;	
	}
	for (var g1 = 0; g1 < giaoduc1.length; g1++) {
		var html= '<div class="card" style=" height: 25rem">';
		html += '<img src="'+giaoduc1[g1].image+'" class="card-img-top" style="height: 20rem;    margin-left: 0;">';
		html += '<div class="card-body" style = "background: #f3f2f2; height: 89px;    width: 101%;    margin-left: -1px;">';
		html += '<h5 class="card-title" ><a href="#" onclick="page1('+g1+')" style = "font-size: 30px;">'+giaoduc1[g1].title+'</a></h5>'
		html +=	'<button type="button" class="btn btn-primary" id="xoa" onclick="xoag1('+g1+')" style="margin-right: 34px;line-height: 0px;height: 34px;">Xoá</button>';
		html += '<button type="submit" class="btn btn-primary" id="sua"  onclick="editg1('+g1+')" style = "line-height: 0px;height: 34px;">Sửa</button>';
		html +=	'</div>';
		html += '</div>';
		html +=	'</div>';
		document.getElementById('col').innerHTML += html;
		document.getElementById('colql').innerHTML += html;	
	}
	for (var g = 0; g < giaoduc.length; g++) {
		var html= '<div class="card_edit">';
		html += '<img src="'+giaoduc[g].image+'" class="card-img-top">';
		html += '<div class="body-card">';
		html += '<h5 class="title-card"><a href="#" onclick="pageg('+g+')">'+giaoduc[g].title+'</a></h5>'
		html +=	'<button type="button" class="btn btn-primary" id="xoa" onclick="xoag('+g+')" style="margin-right: 34px;line-height: 0px;height: 34px;">Xoá</button>';
		html += '<button type="submit" class="btn btn-primary" id="sua"  onclick="editg('+g+')" style = "line-height: 0px;height: 34px;">Sửa</button>';
		html +=	'</div>';
		html += '</div>';
		document.getElementById('col5').innerHTML += html;
		document.getElementById('col5ql').innerHTML += html;
	}
	for (var t = 0; t < taichinh.length; t++) {
		var html = '<div class="col-lg-2">';
		html +='<div class="card">';
		html +='<img src="'+taichinh[t].image+'" style="height: 7rem;width: 100%;margin-left: 0;">';
		html +='<div class="card-body">';
		html +='<h5 class="card-title"><a href="#" onclick="paget('+t+')">'+taichinh[t].title+'</a></h5>';
		html +=	'<button type="button" class="btn btn-primary" id="xoa" onclick="xoat('+t+')"style="margin-right: 34px;line-height: 0px;height: 34px;">Xoá</button>';
		html += '<button type="submit" class="btn btn-primary" id="sua"  onclick="editt('+t+')" style = "line-height: 0px;height: 34px;">Sửa</button>';
		html +='</div>';
		html +='</div>';

		document.getElementById('taichinh').innerHTML += html;
		document.getElementById('taichinhql').innerHTML += html;		
	}	
	for (var v = 0; v < vanhoa.length-3; v++) {
		var html= '<div class="card" style=" height: 400px ; overflow: hidden;">';
		html += '<img src="'+vanhoa[v].image+'" class="card-img-top" style="height: 20rem;width: 100%;margin-left: 0;">';
		html += '<div class="card-body">';
		html += '<h5 class="card-title"><a href="#" onclick="pagev('+v+')" style = "font-size: 28px;">'+vanhoa[v].title+'</a></h5>'
		html +=	'<button type="button" class="btn btn-primary" id="xoa" onclick="xoav('+v+')"style="margin-right: 34px;line-height: 0px;height: 34px;">Xoá</button>';
		html += '<button type="submit" class="btn btn-primary" id="sua"  onclick="editv('+v+')"style = "line-height: 0px;height: 34px;">Sửa</button>';
		html +=	'</div>';
		html += '</div>';
		html +=	'</div>';
		document.getElementById('colv').innerHTML += html;
		document.getElementById('colvql').innerHTML += html;	

	}
	for (var v = 1; v < vanhoa.length; v++) {
		var html= '<div class="card_edit" >';
		html += '<img src="'+vanhoa[v].image+'" class="card-img-top">';
		html += '<div class="body-card">';
		html += '<h5 class="title-card"><a href="#" onclick="pagev('+v+')" >'+vanhoa[v].title+'</a></h5>'
		html +=	'<button type="button" class="btn btn-primary" id="xoa" onclick="xoav('+v+')" style="margin-right: 34px;line-height: 0px;height: 34px;">Xoá</button>';
		html += '<button type="submit" class="btn btn-primary" id="sua"  onclick="editv('+v+')"style = "line-height: 0px;height: 34px;">Sửa</button>';
		html +=	'</div>';
		html += '</div>';
		document.getElementById('col5v').innerHTML += html;
		document.getElementById('col5vql').innerHTML += html;		
	}
	for (var s = 0; s < thethao.length; s++) {
		var html = '<div class="col-3">';
		html +='<div class="card" style="width: 17rem; height: 18rem">';
		html +='<img src="'+thethao[s].image+'" style="height: 10rem;width: 100%;margin-left: 0;">';
		html +='<div class="card-body">';
		html +='<h5 class="card-title"><a href="#" onclick="pages('+s+')">'+thethao[s].title+'</a></h5>';
		html +=	'<button type="button" class="btn btn-primary" id="xoa" onclick="xoas('+s+')" style="margin-right: 34px;line-height: 0px;height: 34px;">Xoá</button>';
		html += '<button type="submit" class="btn btn-primary" id="sua"  onclick="edits('+s+')" style = "line-height: 0px;height: 34px;">Sửa</button>';
		html +='</div>';
		html +='</div>';
		document.getElementById('thethao').innerHTML += html;
		document.getElementById('thethaoql').innerHTML += html;		
	}
	for (var x = 0; x < xe.length-3; x++) {
		var html= '<div class="card" style=" height: 25rem; ">';
		html += '<img src="'+xe[x].image+'" class="card-img-top" style="height: 20rem;width: 100%;margin-left: 0;">';
		html += '<div class="card-body">';
		html += '<h5 class="card-title"><a href="#" onclick="pagex('+x+')"  style = "font-size: 28px;">'+xe[x].title+'</a></h5>'
		html +=	'<button type="button" class="btn btn-primary" id="xoa" onclick="xoax('+x+')" style="margin-right: 34px;line-height: 0px;height: 34px;">Xoá</button>';
		html += '<button type="submit" class="btn btn-primary" id="sua"  onclick="editx('+x+')" style = "line-height: 0px;height: 34px;">Sửa</button>';
		html +=	'</div>';
		html += '</div>';
		html +=	'</div>';
		document.getElementById('colx').innerHTML += html;
		document.getElementById('colxql').innerHTML += html;		
	}
	for (var x = 1; x < xe.length; x++) {
		var html= '<div class="card_edit">';
		html += '<img src="'+xe[x].image+'" class="card-img-top">';
		html += '<div class="body-card">';
		html += '<h5 class="title-card"><a href="#" onclick="pagex('+x+')">'+xe[x].title+'</a></h5>'
		html +=	'<button type="button" class="btn btn-primary" id="xoa" onclick="xoax('+x+')" style="margin-right: 34px;line-height: 0px;height: 34px;">Xoá</button>';
		html += '<button type="submit" class="btn btn-primary" id="sua"  onclick="editx('+x+')" style = "line-height: 0px;height: 34px;">Sửa</button>';
		html +=	'</div>';
		html += '</div>';
		document.getElementById('col5x').innerHTML += html;
		document.getElementById('col5xql').innerHTML += html;	

	}
	for (var d = 0; d < dulich.length; d++) {
		var html = '<div class="col-lg-2">';
		html +='<div class="card">';
		html +='<img src="'+dulich[d].image+'" style="height: 7rem; width: 100%;margin-left: 0;">';
		html +='<div class="card-body">';
		html +='<h5 class="card-title"><a href="#" onclick="paged('+d+')">'+dulich[d].title+'</a></h5>';
		html +=	'<button type="button" class="btn btn-primary" id="xoa" onclick="xoad('+d+')" style="margin-right: 34px;line-height: 0px;height: 34px;">Xoá</button>';
		html += '<button type="submit" class="btn btn-primary" id="sua"  onclick="editd('+d+')" style = "line-height: 0px;height: 34px;">Sửa</button>';
		html +='</div>';
		html +='</div>';

		document.getElementById('dulich').innerHTML += html;
		document.getElementById('dulichql').innerHTML += html;	
	}
	var aPromise = fetch(url);
 
	// Work with Promise object:
	aPromise.then(function(response) {
        if(!response.ok) {
           throw new Error("HTTP error, status = " + response.status);
        }
        // Get JSON Promise from response object:
        var myJSON_promise = response.json();
        return myJSON_promise;
    })
    .then(function(myJSON) {
        console.log("OK! JSON:");
      
        for (var tn = 0; tn < myJSON.items.length; tn++) {
          // document.write('<a href="#">'+myJSON.items[i].title+'</a>' +'<br>' +myJSON.items[i].content+'<br> <br>')
          var html = '<div class="col-lg-4">';
			html +='<div class="card" style="height:400px;">';
			html +=myJSON.items[tn].content;
			html +='<div class="card-body">';
			html +='<h5 class="card-title"><a href="'+myJSON.items[tn].link+'">'+myJSON.items[tn].title+'</a></h5>';
			html +='</div>';
			html +='</div>';

		document.getElementById('craw').innerHTML += html;
          // console.log(myJSON.items[i].title);
        }
    })
    .catch(function(error)  {
        console.log("Noooooo! Something error:");
        console.log(error);
    });
}
function page(c){
	if (localStorage.getItem('congnghe') == null ) {
		var congnghe = this.data.congnghe;
	} else {
		var congnghe = JSON.parse(localStorage.getItem('congnghe'));
	}
	var a =congnghe[c];
	document.getElementById('home').style.display="none";
	document.getElementById('page').style.display="block";
	for (var i = 0; i < congnghe.length; i++) {
		if (a == congnghe[i]) {
			var img = '<img src="'+congnghe[i].image+'" alt="" style="height:400px;">';
			img +='<p class="text-left">'+congnghe[i].titleimg+'</p>'
			document.getElementById('h2').innerHTML= congnghe[i].title;
			document.getElementById('titl').innerHTML= congnghe[i].titlecontent;
			document.getElementById('imagepage').innerHTML +=img;
			document.getElementById('contentpage').innerHTML= congnghe[i].content;
			document.getElementById('tacgia').innerHTML= congnghe[i].anthor;
			var date1 = new Date();
			document.getElementById('date').innerHTML = date1;
			if (localStorage.getItem('tinnong') == null || localStorage.getItem('quantam') == null) {
			    var tinnong = this.data.tinnong;
			    var quantam = this.data.quantam;
			  } else {
			    var tinnong = JSON.parse(localStorage.getItem('tinnong'));
			    var quantam = JSON.parse(localStorage.getItem('quantam'));
			  }
			for (var n= 1; n < tinnong.length; n++) {
				var html= '<div class="card_edit">';
					html += '<img src="'+tinnong[n].image+'" class="card-img-top">';
					html += '<div class="body-card">';
					html += '<h5 class="title-card"><a href="#" onclick="page('+n+')">'+tinnong[n].title+'</a></h5>'
					html +=	'</div>';
					html += '</div>';
					document.getElementById('col4').innerHTML += html;	
			}
			for (var l = 0; l < quantam.length; l++) {
				var html = '<div class="col-3">';
				html +='<div class="card" style="width: 17rem; height: 18rem">';
				html +='<img src="'+quantam[l].image+'" style="height: 10rem;">';
				html +='<div class="card-body">';
				html +='<h5 class="card-title"><a href="#" onclick="page('+l+')">'+quantam[l].title+'</a></h5>';
				html +='</div>';
				html +='</div>';

				document.getElementById('tinnong').innerHTML += html;	
			}
		}
	}
}
function page1(g1){
	var b = data.giaoduc1[g1];
	document.getElementById('home').style.display="none";
	document.getElementById('page').style.display="block";
	for (var jg = 0; jg < data.giaoduc1.length; jg++) {
		if (b == data.giaoduc1[jg]) {
			var img = '<img src="'+data.giaoduc1[jg].image+'" style="width:700px;">';
			img +='<p class="text-left">'+data.giaoduc1[jg].titleimg+'</p>'
			document.getElementById('h2').innerHTML= data.giaoduc1[jg].title;
			document.getElementById('titl').innerHTML= data.giaoduc1[jg].titlecontent;
			document.getElementById('imagepage').innerHTML +=img;
			document.getElementById('contentpage').innerHTML= data.giaoduc1[jg].content;
			document.getElementById('tacgia').innerHTML= data.giaoduc1[jg].anthor;
			var date1 = new Date();
			document.getElementById('date').innerHTML = date1;

			if (localStorage.getItem('tinnong') == null || localStorage.getItem('quantam') == null) {
			    var tinnong = this.data.tinnong;
			    var quantam = this.data.quantam;
			  } else {
			    var tinnong = JSON.parse(localStorage.getItem('tinnong'));
			    var quantam = JSON.parse(localStorage.getItem('quantam'));
			  }
			for (var n= 1; n < tinnong.length; n++) {
				var html= '<div class="card_edit">';
					html += '<img src="'+tinnong[n].image+'" class="card-img-top">';
					html += '<div class="body-card">';
					html += '<h5 class="title-card"><a href="#" onclick="page('+n+')">'+tinnong[n].title+'</a></h5>'
					html +=	'</div>';
					html += '</div>';
					document.getElementById('col4').innerHTML += html;	
			}
			for (var l = 0; l < quantam.length; l++) {
				var html = '<div class="col-3">';
				html +='<div class="card" style="width: 17rem; height: 18rem">';
				html +='<img src="'+quantam[l].image+'" style="height: 10rem;">';
				html +='<div class="card-body">';
				html +='<h5 class="card-title"><a href="#" onclick="page('+l+')">'+quantam[l].title+'</a></h5>';
				html +='</div>';
				html +='</div>';

				document.getElementById('tinnong').innerHTML += html;	
			}
		}
	}
}
function pageg(g){
	var b = data.giaoduc[g];
	document.getElementById('home').style.display="none";
	document.getElementById('page').style.display="block";
	for (var j = 0; j < data.giaoduc.length; j++) {
		if (b == data.giaoduc[j]) {
			var img = '<img src="'+data.giaoduc[j].image+'">';
			img +='<p class="text-left">'+data.giaoduc[j].titleimg+'</p>'
			document.getElementById('h2').innerHTML= data.giaoduc[j].title;
			document.getElementById('titl').innerHTML= data.giaoduc[j].titlecontent;
			document.getElementById('imagepage').innerHTML +=img;
			document.getElementById('contentpage').innerHTML= data.giaoduc[j].content;
			document.getElementById('tacgia').innerHTML= data.giaoduc[j].anthor;
			var date1 = new Date();
			document.getElementById('date').innerHTML = date1;

			if (localStorage.getItem('tinnong') == null || localStorage.getItem('quantam') == null) {
			    var tinnong = this.data.tinnong;
			    var quantam = this.data.quantam;
			  } else {
			    var tinnong = JSON.parse(localStorage.getItem('tinnong'));
			    var quantam = JSON.parse(localStorage.getItem('quantam'));
			  }
			for (var n= 1; n < tinnong.length; n++) {
				var html= '<div class="card_edit">';
					html += '<img src="'+tinnong[n].image+'" class="card-img-top">';
					html += '<div class="body-card">';
					html += '<h5 class="title-card"><a href="#" onclick="page('+n+')">'+tinnong[n].title+'</a></h5>'
					html +=	'</div>';
					html += '</div>';
					document.getElementById('col4').innerHTML += html;	
			}
			for (var l = 0; l < quantam.length; l++) {
				var html = '<div class="col-3">';
				html +='<div class="card" style="width: 17rem; height: 18rem">';
				html +='<img src="'+quantam[l].image+'" style="height: 10rem;">';
				html +='<div class="card-body">';
				html +='<h5 class="card-title"><a href="#" onclick="page('+l+')">'+quantam[l].title+'</a></h5>';
				html +='</div>';
				html +='</div>';

				document.getElementById('tinnong').innerHTML += html;	
			}
		}
	}
}
function paget(t){
	var a =data.taichinh[t];
	document.getElementById('home').style.display="none";
	document.getElementById('page').style.display="block";
	for (var k = 0; k < data.taichinh.length; k++) {
		if (a == data.taichinh[k]) {
			var img = '<img src="'+data.taichinh[k].image+'" alt="">';
			img +='<p class="text-left">'+data.taichinh[k].titleimg+'</p>'
			document.getElementById('h2').innerHTML= data.taichinh[k].title;
			document.getElementById('titl').innerHTML= data.taichinh[k].titlecontent;
			document.getElementById('imagepage').innerHTML +=img;
			document.getElementById('contentpage').innerHTML= data.taichinh[k].content;
			document.getElementById('tacgia').innerHTML= data.taichinh[k].anthor;
			var date1 = new Date();
			document.getElementById('date').innerHTML = date1;
			if (localStorage.getItem('tinnong') == null || localStorage.getItem('quantam') == null) {
			    var tinnong = this.data.tinnong;
			    var quantam = this.data.quantam;
			  } else {
			    var tinnong = JSON.parse(localStorage.getItem('tinnong'));
			    var quantam = JSON.parse(localStorage.getItem('quantam'));
			  }
			for (var n= 1; n < tinnong.length; n++) {
				var html= '<div class="card_edit">';
					html += '<img src="'+tinnong[n].image+'" class="card-img-top">';
					html += '<div class="body-card">';
					html += '<h5 class="title-card"><a href="#" onclick="page('+n+')">'+tinnong[n].title+'</a></h5>'
					html +=	'</div>';
					html += '</div>';
					document.getElementById('col4').innerHTML += html;	
			}
			for (var l = 0; l < quantam.length; l++) {
				var html = '<div class="col-3">';
				html +='<div class="card" style="width: 17rem; height: 18rem">';
				html +='<img src="'+quantam[l].image+'" style="height: 10rem;">';
				html +='<div class="card-body">';
				html +='<h5 class="card-title"><a href="#" onclick="page('+l+')">'+quantam[l].title+'</a></h5>';
				html +='</div>';
				html +='</div>';

				document.getElementById('tinnong').innerHTML += html;	
			}
		}
	}
}
function pagev(v){
	var a =data.vanhoa[v];
	document.getElementById('home').style.display="none";
	document.getElementById('page').style.display="block";
	for (var i = 0; i < data.taichinh.length; i++) {
		if (a == data.vanhoa[i]) {
			var img = '<img src="'+data.vanhoa[i].image+'" alt="">';
			img +='<p class="text-left">'+data.vanhoa[i].titleimg+'</p>'
			document.getElementById('h2').innerHTML= data.vanhoa[i].title;
			document.getElementById('titl').innerHTML= data.vanhoa[i].titlecontent;
			document.getElementById('imagepage').innerHTML +=img;
			document.getElementById('contentpage').innerHTML= data.vanhoa[i].content;
			document.getElementById('tacgia').innerHTML= data.vanhoa[i].anthor;
			var date1 = new Date();
			document.getElementById('date').innerHTML = date1;

			if (localStorage.getItem('tinnong') == null || localStorage.getItem('quantam') == null) {
			    var tinnong = this.data.tinnong;
			    var quantam = this.data.quantam;
			  } else {
			    var tinnong = JSON.parse(localStorage.getItem('tinnong'));
			    var quantam = JSON.parse(localStorage.getItem('quantam'));
			  }
			for (var n= 1; n < tinnong.length; n++) {
				var html= '<div class="card_edit">';
					html += '<img src="'+tinnong[n].image+'" class="card-img-top">';
					html += '<div class="body-card">';
					html += '<h5 class="title-card"><a href="#" onclick="page('+n+')">'+tinnong[n].title+'</a></h5>'
					html +=	'</div>';
					html += '</div>';
					document.getElementById('col4').innerHTML += html;	
			}
			for (var l = 0; l < quantam.length; l++) {
				var html = '<div class="col-3">';
				html +='<div class="card" style="width: 17rem; height: 18rem">';
				html +='<img src="'+quantam[l].image+'" style="height: 10rem;">';
				html +='<div class="card-body">';
				html +='<h5 class="card-title"><a href="#" onclick="page('+l+')">'+quantam[l].title+'</a></h5>';
				html +='</div>';
				html +='</div>';

				document.getElementById('tinnong').innerHTML += html;	
			}
		}
	}
}
function pages(s){
	var a =data.thethao[s];
	document.getElementById('home').style.display="none";
	document.getElementById('page').style.display="block";
	for (var i = 0; i < data.thethao.length; i++) {
		if (a == data.thethao[i]) {
			var img = '<img src="'+data.thethao[i].image+'" alt="">';
			img +='<p class="text-left">'+data.thethao[i].titleimg+'</p>'
			document.getElementById('h2').innerHTML= data.thethao[i].title;
			document.getElementById('titl').innerHTML= data.thethao[i].titlecontent;
			document.getElementById('imagepage').innerHTML +=img;
			document.getElementById('contentpage').innerHTML= data.thethao[i].content;
			document.getElementById('tacgia').innerHTML= data.thethao[i].anthor;
			var date1 = new Date();
			document.getElementById('date').innerHTML = date1;
			if (localStorage.getItem('tinnong') == null || localStorage.getItem('quantam') == null) {
			    var tinnong = this.data.tinnong;
			    var quantam = this.data.quantam;
			  } else {
			    var tinnong = JSON.parse(localStorage.getItem('tinnong'));
			    var quantam = JSON.parse(localStorage.getItem('quantam'));
			  }
			for (var n= 1; n < tinnong.length; n++) {
				var html= '<div class="card_edit">';
					html += '<img src="'+tinnong[n].image+'" class="card-img-top">';
					html += '<div class="body-card">';
					html += '<h5 class="title-card"><a href="#" onclick="page('+n+')">'+tinnong[n].title+'</a></h5>'
					html +=	'</div>';
					html += '</div>';
					document.getElementById('col4').innerHTML += html;	
			}
			for (var l = 0; l < quantam.length; l++) {
				var html = '<div class="col-3">';
				html +='<div class="card" style="width: 17rem; height: 18rem">';
				html +='<img src="'+quantam[l].image+'" style="height: 10rem;">';
				html +='<div class="card-body">';
				html +='<h5 class="card-title"><a href="#" onclick="page('+l+')">'+quantam[l].title+'</a></h5>';
				html +='</div>';
				html +='</div>';

				document.getElementById('tinnong').innerHTML += html;	
			}
		}
	}
}
function pagex(x){
	var a =data.xe[x];
	document.getElementById('home').style.display="none";
	document.getElementById('page').style.display="block";
	for (var i = 0; i < data.xe.length; i++) {
		if (a == data.xe[i]) {
			var img = '<img src="'+data.xe[i].image+'" alt="">';
			img +='<p class="text-left">'+data.xe[i].titleimg+'</p>'
			document.getElementById('h2').innerHTML= data.xe[i].title;
			document.getElementById('titl').innerHTML= data.xe[i].titlecontent;
			document.getElementById('imagepage').innerHTML +=img;
			document.getElementById('contentpage').innerHTML= data.xe[i].content;
			document.getElementById('tacgia').innerHTML= data.xe[i].anthor;
			var date1 = new Date();
			document.getElementById('date').innerHTML = date1;

			if (localStorage.getItem('tinnong') == null || localStorage.getItem('quantam') == null) {
			    var tinnong = this.data.tinnong;
			    var quantam = this.data.quantam;
			  } else {
			    var tinnong = JSON.parse(localStorage.getItem('tinnong'));
			    var quantam = JSON.parse(localStorage.getItem('quantam'));
			  }
			for (var n= 1; n < tinnong.length; n++) {
				var html= '<div class="card_edit">';
					html += '<img src="'+tinnong[n].image+'" class="card-img-top">';
					html += '<div class="body-card">';
					html += '<h5 class="title-card"><a href="#" onclick="page('+n+')">'+tinnong[n].title+'</a></h5>'
					html +=	'</div>';
					html += '</div>';
					document.getElementById('col4').innerHTML += html;	
			}
			for (var l = 0; l < quantam.length; l++) {
				var html = '<div class="col-3">';
				html +='<div class="card" style="width: 17rem; height: 18rem">';
				html +='<img src="'+quantam[l].image+'" style="height: 10rem;">';
				html +='<div class="card-body">';
				html +='<h5 class="card-title"><a href="#" onclick="page('+l+')">'+quantam[l].title+'</a></h5>';
				html +='</div>';
				html +='</div>';

				document.getElementById('tinnong').innerHTML += html;	
			}
		}
	}
}
function paged(d){
	var a =data.dulich[d];
	document.getElementById('home').style.display="none";
	document.getElementById('page').style.display="block";
	for (var i = 0; i < data.dulich.length; i++) {
		if (a == data.dulich[i]) {
			var img = '<img src="'+data.dulich[i].image+'" alt="">';
			img +='<p class="text-left">'+data.dulich[i].titleimg+'</p>'
			document.getElementById('h2').innerHTML= data.dulich[i].title;
			document.getElementById('titl').innerHTML= data.dulich[i].titlecontent;
			document.getElementById('imagepage').innerHTML +=img;
			document.getElementById('contentpage').innerHTML= data.dulich[i].content;
			document.getElementById('tacgia').innerHTML= data.dulich[i].anthor;
			var date1 = new Date();
			document.getElementById('date').innerHTML = date1;
			if (localStorage.getItem('tinnong') == null || localStorage.getItem('quantam') == null) {
			    var tinnong = this.data.tinnong;
			    var quantam = this.data.quantam;
			  } else {
			    var tinnong = JSON.parse(localStorage.getItem('tinnong'));
			    var quantam = JSON.parse(localStorage.getItem('quantam'));
			  }
			for (var n= 1; n < tinnong.length; n++) {
				var html= '<div class="card_edit">';
					html += '<img src="'+tinnong[n].image+'" class="card-img-top">';
					html += '<div class="body-card">';
					html += '<h5 class="title-card"><a href="#" onclick="page('+n+')">'+tinnong[n].title+'</a></h5>'
					html +=	'</div>';
					html += '</div>';
					document.getElementById('col4').innerHTML += html;	
			}
			for (var l = 0; l < quantam.length; l++) {
				var html = '<div class="col-3">';
				html +='<div class="card" style="width: 17rem; height: 18rem">';
				html +='<img src="'+quantam[l].image+'" style="height: 10rem;">';
				html +='<div class="card-body">';
				html +='<h5 class="card-title"><a href="#" onclick="page('+l+')">'+quantam[l].title+'</a></h5>';
				html +='</div>';
				html +='</div>';

				document.getElementById('tinnong').innerHTML += html;	
			}
		}
	}
}
function xoac(c){
  var xcongnghe = JSON.parse(localStorage.getItem('congnghe'));
  var a = xcongnghe[c];
  for (var xcn = 0; xcn < xcongnghe.length +1; xcn++) {
    if (a == xcongnghe[xcn]) {
      xcongnghe.splice(xcn,1);
    } 
  } 

  data.congnghe = xcongnghe ;
  localStorage.setItem('congnghe',JSON.stringify(data.congnghe) );
  window.location.reload(false);
}
function xoag(g){
  var xgiaoduc = JSON.parse(localStorage.getItem('giaoduc'));
  var a = xgiaoduc[g];
  for (var xgd = 0; xgd < xgiaoduc.length +1; xgd++) {
    if (a == xgiaoduc[xgd]) {
      xgiaoduc.splice(xgd,1);
    } 
  } 

  data.giaoduc = xgiaoduc ;
  localStorage.setItem('giaoduc',JSON.stringify(data.giaoduc) );
  window.location.reload(false);
}
function xoat(t){
  var xtaichinh = JSON.parse(localStorage.getItem('taichinh'));
  var a = xtaichinh[t];
  for (var xtc = 0; xtc < xtaichinh.length +1; xtc++) {
    if (a == xtaichinh[xtc]) {
      xtaichinh.splice(xtc,1);
    } 
  } 

  data.taichinh = xtaichinh ;
  localStorage.setItem('taichinh',JSON.stringify(data.taichinh) );
  window.location.reload(false);
}
function xoav(v){
  var xvanhoa = JSON.parse(localStorage.getItem('vanhoa'));
  var a = xvanhoa[v];
  for (var xvh = 0; xvh < xvanhoa.length +1; xvh++) {
    if (a == xslide[xvh]) {
      xvanhoa.splice(xvh,1);
    } 
  } 

  data.vanhoa = xvanhoa ;
  localStorage.setItem('vanhoa',JSON.stringify(data.vanhoa) );
  window.location.reload(false);
}
function xoas(s){
  var xthethao = JSON.parse(localStorage.getItem('thethao'));
  var a = xthethao[s];
  for (var xtt = 0; xtt < xthethao.length +1; xtt++) {
    if (a == xthethao[xtt]) {
      xthethao.splice(xtt,1);
    } 
  } 

  data.thethao = xthethao ;
  localStorage.setItem('thethao',JSON.stringify(data.thethao) );
  window.location.reload(false);
}
function xoax(x){
  var xxe = JSON.parse(localStorage.getItem('xe'));
  var a = xxe[x];
  for (var xe = 0; xe < xxe.length +1; xe++) {
    if (a == xxe[xe]) {
      xxe.splice(xe,1);
    } 
  } 

  data.thethao = xxe ;
  localStorage.setItem('thethao',JSON.stringify(data.thethao) );
  window.location.reload(false);
}
function xoad(d){
  var xdulich = JSON.parse(localStorage.getItem('thethao'));
  var a = xdulich[d];
  for (var xdl = 0; xdl < xdulich.length +1; xdl++) {
    if (a == xdulich[xdl]) {
      xdulich.splice(xdl,1);
    } 
  } 

  data.thethao = xdulich ;
  localStorage.setItem('thethao',JSON.stringify(data.thethao) );
  window.location.reload(false);
}
function adquanly(){
	document.getElementById('trquanly').style.display="block";
	document.getElementById('home').style.display="block";
}
function editc(c){
  document.getElementById('sua').style.display='block';
  var edcn = JSON.parse(localStorage.getItem('congnghe'));
  var a = edcn[c];
  for (var edc = 0; edc < edcn.length +1; edc++) {
    if (a == edcn[edc]) {
      var demo= '<form>';
      demo +=  '<p id="id">ID:'+edcn[edc].id+'</p>';
      demo += '<div class="form-group"><input type="text" class="form-control" value="'+edcn[edc].title+'" id="title_edit"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="tltc_edit" value="'+edcn[edc].titlecontent+'"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="img_edit" value="'+edcn[edc].image+'"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="cn_edit" value="'+edcn[edc].content+'"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="tltimg_edit" value="'+edcn[edc].titleimg+'"></div>';
      demo += '<button type="button" class="btn btn-primary" onclick="suac('+edc+')">Submit</button>';
      demo +='</form>';
      document.getElementById("sua").innerHTML += demo;
    } 
  }
}
function suac(edc){
  var title_edit=  document.getElementById("title_edit").value;
  var tltc_edit=  document.getElementById("tltc_edit").value;
  var img_edit=  document.getElementById("img_edit").value;
  var cn_edit=  document.getElementById("cn_edit").value;
  var tltimg_edit=  document.getElementById("tltimg_edit").value;

  var ed = JSON.parse(localStorage.getItem('congnghe'));
  var a = ed[edc];

  for (var ec = 0; ec < ed.length +1; ec++) {
    if (a == ed[ec]) {
      ed[ec].title = title_edit;
      ed[ec].titlecontent =tltc_edit;
      ed[ec].image =img_edit;
      ed[ec].content =cn_edit;
      ed[ec].titleimg =tltimg_edit;	
    } 
  }
  data.congnghe =ed ;
  localStorage.setItem('congnghe',JSON.stringify(data.congnghe));
  window.location.reload(false);
}
function editg(g1){
  document.getElementById('sua').style.display='block';
  var edg1 = JSON.parse(localStorage.getItem('giaoduc'));
  var a = edg1[g1];
  for (var edg = 0; edg < edg1.length +1; edg++) {
    if (a == edg1[edg]) {
      var demo= '<form>';
      demo +=  '<p id="id">ID:'+edg1[edg].id+'</p>';
      demo += '<div class="form-group"><input type="text" class="form-control" value="'+edg1[edg].title+'" id="title_edit"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="tltc_edit" value="'+edg1[edg].titlecontent+'"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="img_edit" value="'+edg1[edg].image+'"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="cn_edit" value="'+edg1[edg].content+'"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="tltimg_edit" value="'+edg1[edg].titleimg+'"></div>';
      demo += '<button type="button" class="btn btn-primary" onclick="suag('+edg+')">Submit</button>';
      demo +='</form>';
      document.getElementById("sua").innerHTML += demo;
    } 
  }
}
function suag(edg){
  var title_edit=  document.getElementById("title_edit").value;
  var tltc_edit=  document.getElementById("tltc_edit").value;
  var img_edit=  document.getElementById("img_edit").value;
  var cn_edit=  document.getElementById("cn_edit").value;
  var tltimg_edit=  document.getElementById("tltimg_edit").value;

  var edgg = JSON.parse(localStorage.getItem('giaoduc'));
  var a = edgg[edg];

  for (var eg = 0; eg < edgg.length +1; eg++) {
    if (a == edgg[eg]) {
      edgg[eg].title = title_edit;
      edgg[eg].titlecontent =tltc_edit;
      edgg[eg].image =img_edit;
      edgg[eg].content =cn_edit;
      edgg[eg].titleimg =tltimg_edit;
    } 
  }
  data.giaoduc =edgg ;
  localStorage.setItem('giaoduc',JSON.stringify(data.giaoduc));
  window.location.reload(false);
}
function editv(v){
  document.getElementById('sua').style.display='block';
  var edv = JSON.parse(localStorage.getItem('vanhoa'));
  var a = edv[v];
  for (var edtv = 0; edtv < edv.length +1; edtv++) {
    if (a == edv[edtv]) {
      var demo= '<form>';
      demo +=  '<p id="id">ID:'+edv[edtv].id+'</p>';
      demo += '<div class="form-group"><input type="text" class="form-control" value="'+edv[edtv].title+'" id="title_edit"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="tltc_edit" value="'+edv[edtv].titlecontent+'"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="img_edit" value="'+edv[edtv].image+'"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="cn_edit" value="'+edv[edtv].content+'"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="tltimg_edit" value="'+edv[edtv].titleimg+'"></div>';
      demo += '<button type="button" class="btn btn-primary" onclick="suav('+edtv+')">Submit</button>';
      demo +='</form>';
      document.getElementById("sua").innerHTML += demo;
    } 
  }
}
function suav(edtv){
  var title_edit=  document.getElementById("title_edit").value;
  var tltc_edit=  document.getElementById("tltc_edit").value;
  var img_edit=  document.getElementById("img_edit").value;
  var cn_edit=  document.getElementById("cn_edit").value;
  var tltimg_edit=  document.getElementById("tltimg_edit").value;

  var ev = JSON.parse(localStorage.getItem('vanhoa'));
  var a = ev[edtv];

  for (var esv = 0; esv < ev.length +1; esv++) {
    if (a == ev[esv]) {
      ev[esv].title = title_edit;
      ev[esv].titlecontent =tltc_edit;
      ev[esv].image =img_edit;
      ev[esv].content =cn_edit;
      ev[esv].titleimg =tltimg_edit;	
    } 
  }
  data.congnghe =ev ;
  localStorage.setItem('vanhoa',JSON.stringify(data.vanhoa));
  window.location.reload(false);
}
function edits(s){
  document.getElementById('sua').style.display='block';
  var eds = JSON.parse(localStorage.getItem('thethao'));
  var a = eds[s];
  for (var edts = 0; edts < eds.length +1; edts++) {
    if (a == eds[edts]) {
      var demo= '<form>';
      demo +=  '<p id="id">ID:'+eds[edts].id+'</p>';
      demo += '<div class="form-group"><input type="text" class="form-control" value="'+eds[edts].title+'" id="title_edit"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="tltc_edit" value="'+eds[edts].titlecontent+'"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="img_edit" value="'+eds[edts].image+'"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="cn_edit" value="'+eds[edts].content+'"></div>';
      demo += '<div class="form-group"><input type="text" class="form-control" id="tltimg_edit" value="'+eds[edts].titleimg+'"></div>';
      demo += '<button type="button" class="btn btn-primary" onclick="suas('+edts+')">Submit</button>';
      demo +='</form>';
      document.getElementById("sua").innerHTML += demo;
    } 
  }
}
function suas(edts){
  var title_edit=  document.getElementById("title_edit").value;
  var tltc_edit=  document.getElementById("tltc_edit").value;
  var img_edit=  document.getElementById("img_edit").value;
  var cn_edit=  document.getElementById("cn_edit").value;
  var tltimg_edit=  document.getElementById("tltimg_edit").value;

  var eds = JSON.parse(localStorage.getItem('thethao'));
  var a = eds[edts];

  for (var es = 0; es < eds.length +1; es++) {
    if (a == eds[es]) {
      eds[es].title = title_edit;
      eds[es].titlecontent =tltc_edit;
      eds[es].image =img_edit;
      eds[es].content =cn_edit;
      eds[es].titleimg =tltimg_edit;
    } 
  }
  data.thethao =eds ;
  localStorage.setItem('thethao',JSON.stringify(data.thethao));
  window.location.reload(false);
}

function add(){

  var danhmuc=document.getElementById("danhmuc").value;
  var dmgiaoduc=document.getElementById("dmgiaoduc").value;
  var dmcongnghe=document.getElementById("cn").value;
  var dmtaichinh=document.getElementById("tc").value;
  var vanhoa=document.getElementById("dmvanhoa").value;
  var thethao=document.getElementById("tt").value;
  var xe=document.getElementById("xexe").value;
  var dulich=document.getElementById("dl").value;

  var title=  document.getElementById("titleadd").value;
  var titlecontent=  document.getElementById("titleaddcontent").value;
  var content=  document.getElementById("contentadd").value;
  var image=  document.getElementById("imgadd").value;
  var anthor=  document.getElementById("anthor").value;
  var titleimg=  document.getElementById("titleimgadd").value;
  image = image.split('\\')[2];

  if(danhmuc == dmcongnghe){
    data.congnghe.push({id:id++, title, titlecontent,image,anthor , content, titleimg});
    localStorage.setItem('congnghe', JSON.stringify(data.congnghe));
    window.location.reload(false);
  }else if(danhmuc == dmgiaoduc){
    data.giaoduc.push({id:id++, title, titlecontent,image,anthor , content, titleimg});
    localStorage.setItem('giaoduc', JSON.stringify(data.giaoduc));
    window.location.reload(false);
  }else if(danhmuc == dmtaichinh){
    data.taichinh.push({id:id++, title, titlecontent,image,anthor , content, titleimg});
    localStorage.setItem('taichinh', JSON.stringify(data.taichinh));
    window.location.reload(false);
  }else if(danhmuc == vanhoa){
    data.vanhoa.push({id:id++, title, titlecontent,image,anthor , content, titleimg});
    localStorage.setItem('vanhoa', JSON.stringify(data.vanhoa));
    window.location.reload(false);
  }else if(danhmuc == thethao){
    data.thethao.push({id:id++, title, titlecontent,image,anthor , content, titleimg});
    localStorage.setItem('thethao', JSON.stringify(data.thethao));
    window.location.reload(false);
  }else if(danhmuc == xe){
    data.xe.push({id:id++, title, titlecontent,image,anthor , content, titleimg});
    localStorage.setItem('xe', JSON.stringify(data.xe));
    window.location.reload(false);
  }else if(danhmuc == dulich){
    data.dulich.push({id:id++, title, titlecontent,image,anthor , content, titleimg});
    localStorage.setItem('dulich', JSON.stringify(data.dulich));
    window.location.reload(false);
  }else{
    alert("danh mục ko tồn tại");
   }
  // window.location.reload(false); 
}
function showadd(){
	document.getElementById('idadd').style.display="block";	
}