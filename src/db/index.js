import { ref } from "vue";

const users = ref([
  {
    userID: 1,
    email: "1phantrongvinh98@gmail.com",
    password: "210198",
    nickname: "Hinva",
    birthDate: new Date("21/10/1998"),
    roleID: 2,
    img: "hinva.jpg",
    status: "Người mang đến giấc mơ",
    isActive: true,
    gender: true,
  },
  {
    userID: 2,
    email: "zphanztrongzvinhz@gmail.com",
    password: "210198",
    nickname: "Limerence",
    birthDate: new Date("21/10/1998"),
    roleID: 2,
    img: "hinva.jpg",
    status: "Người đột phá cõi mộng",
    isActive: true,
    gender: true,
  },
  {
    userID: 3,
    email: "ocphanbachlong@gmail.com",
    password: "210198",
    nickname: "Long",
    birthDate: new Date("21/10/1998"),
    roleID: 2,
    img: "hinva.jpg",
    status: "Kẻ ngốc muốn được yêu",
    isActive: true,
    gender: true,
  },
  {
    userID: 4,
    email: "phungtrieuvy222@gmail.com",
    password: "210198",
    nickname: "TrieuVy",
    birthDate: new Date("21/10/1998"),
    roleID: 2,
    img: "hinva.jpg",
    status: "Kẻ ngốc trong nhân gian",
    isActive: true,
    gender: false,
  },
  {
    userID: 5,
    email: "ryufunkeln@gmail.com",
    password: "210198",
    nickname: "Ryu",
    birthDate: new Date("21/10/1998"),
    roleID: 2,
    img: "hinva.jpg",
    status: "King of Joker",
    isActive: true,
    gender: true,
  },
  {
    userID: 6,
    email: "phantrongvinh447@gmail.com",
    password: "210198",
    nickname: "Gnasche",
    birthDate: new Date("21/10/1998"),
    roleID: 2,
    img: "hinva.jpg",
    status: "Người khờ kẻ ngốc",
    isActive: true,
    gender: true,
  },
  {
    userID: 7,
    email: "nguyenthuy@gmail.com",
    password: "210198",
    nickname: "Bluemaraschino",
    birthDate: new Date("02/09/1998"),
    roleID: 2,
    img: "hinva.jpg",
    status: "Booyahh Pureun",
    isActive: true,
    gender: false,
  },
]);

const blogs = ref([
  {
    blogID: 1,
    title: "Bình yên không phải nơi chốn, mà là người mình chọn ở bên.",
    description:
      "Có thể nhà không phải để nói về nơi chốn mà nói về người mà chúng ta yêu thương, những khi quay đầu đều thấy người ấy ở sau ta.",
    contents: [
      "Đi qua tuổi trẻ, ta tìm kiếm nơi náo nhiệt. Năng lượng thuần khiét của tuổi dậy thì thúc đẩy ta trải qua những điều ta chưa bao giờ dám. Sau khi nếm đủ hương vị của cuộc sống, những khó khăn và uất ức cũng lần lượt xuất hiện. Thế nên bình yên lại là điều cuối cùng ta muốn có được. Bình yên là gì, là cảm giác được yên lòng, là không cần bận tâm những điều xung quanh, là mỗi ngày đều không có gánh nặng trên vai, là nụ cười trên môi, là những điều mình muốn luôn xuất hiện xung quanh,... Thật ra mỗi người đều có một cái gọi là bình yên, có khi giống nhau cũng có khi giống nhau. Nhưng lại đúc kết ra bình yêu là điều bản thân mong muốn nhất về một cuộc sống.",
      "Thế bản chất cuộc sống là gì? Đối với tác giả, đó là cuộc đời không cô độc. Mỗi cá thể luôn sở hữu một nửa trái tim về mặt tinh thần, luôn có một nửa còn lại đang ở đâu đó trên thế gian đợi ta phát hiện. Thế cuộc sống có phải là tình yêu? Cũng có thể và cũng có thể nói tình yêu là một phần của việc được 'sống'. Ta phải làm mọi thứ dể bản thân tồn tại trên thế gian nhưng trải qua những điều để bồi dưỡng cảm xúc mới gọi là được 'sống'. Yêu và được yêu có thể nói rằng ta đã được 'sống' hơn nửa đời người.",
      "Ta được 'sống' , được yêu, đó được gọi là một cuộc đời bình yên. Ta được là chính ta, ta có nơi quay về, đó là mái ấm, không phải là nơi chốn mà là một người ta gọi là yêu thương.",
    ],
    authorID: 1,
    createdAt: new Date(),
    img: "love-blog.jpg",
    likes: [1, 2, 3, 4, 5, 6],
  },
  {
    blogID: 2,
    title: "Sau tất cả, ngày mai là một ngày mới.",
    description:
      "Nhắm mắt vào đêm và mở mắt vào ban ngày. Muộn phiền để ngày trước, tương lại để ngày mai.",
    contents: [
      "Đi qua tuổi trẻ, ta tìm kiếm nơi náo nhiệt. Năng lượng thuần khiét của tuổi dậy thì thúc đẩy ta trải qua những điều ta chưa bao giờ dám. Sau khi nếm đủ hương vị của cuộc sống, những khó khăn và uất ức cũng lần lượt xuất hiện. Thế nên bình yên lại là điều cuối cùng ta muốn có được. Bình yên là gì, là cảm giác được yên lòng, là không cần bận tâm những điều xung quanh, là mỗi ngày đều không có gánh nặng trên vai, là nụ cười trên môi, là những điều mình muốn luôn xuất hiện xung quanh,... Thật ra mỗi người đều có một cái gọi là bình yên, có khi giống nhau cũng có khi giống nhau. Nhưng lại đúc kết ra bình yêu là điều bản thân mong muốn nhất về một cuộc sống.",
      "Thế bản chất cuộc sống là gì? Đối với tác giả, đó là cuộc đời không cô độc. Mỗi cá thể luôn sở hữu một nửa trái tim về mặt tinh thần, luôn có một nửa còn lại đang ở đâu đó trên thế gian đợi ta phát hiện. Thế cuộc sống có phải là tình yêu? Cũng có thể và cũng có thể nói tình yêu là một phần của việc được 'sống'. Ta phải làm mọi thứ dể bản thân tồn tại trên thế gian nhưng trải qua những điều để bồi dưỡng cảm xúc mới gọi là được 'sống'. Yêu và được yêu có thể nói rằng ta đã được 'sống' hơn nửa đời người.",
      "Ta được 'sống' , được yêu, đó được gọi là một cuộc đời bình yên. Ta được là chính ta, ta có nơi quay về, đó là mái ấm, không phải là nơi chốn mà là một người ta gọi là yêu thương.",
    ],
    authorID: 1,
    createdAt: new Date(),
    img: "new-day.jpg",
    likes: [3],
  },
  {
    blogID: 3,
    title: "Đi qua tuổi trẻ, ta hết mình với thứ gọi là thanh xuân.",
    description:
      "Điều hối hận không phải đã làm những việc khiến chúng ta xấu hổ, mà chính là không làm gì.",
    contents: [
      "Đi qua tuổi trẻ, ta tìm kiếm nơi náo nhiệt. Năng lượng thuần khiét của tuổi dậy thì thúc đẩy ta trải qua những điều ta chưa bao giờ dám. Sau khi nếm đủ hương vị của cuộc sống, những khó khăn và uất ức cũng lần lượt xuất hiện. Thế nên bình yên lại là điều cuối cùng ta muốn có được. Bình yên là gì, là cảm giác được yên lòng, là không cần bận tâm những điều xung quanh, là mỗi ngày đều không có gánh nặng trên vai, là nụ cười trên môi, là những điều mình muốn luôn xuất hiện xung quanh,... Thật ra mỗi người đều có một cái gọi là bình yên, có khi giống nhau cũng có khi giống nhau. Nhưng lại đúc kết ra bình yêu là điều bản thân mong muốn nhất về một cuộc sống.",
      "Thế bản chất cuộc sống là gì? Đối với tác giả, đó là cuộc đời không cô độc. Mỗi cá thể luôn sở hữu một nửa trái tim về mặt tinh thần, luôn có một nửa còn lại đang ở đâu đó trên thế gian đợi ta phát hiện. Thế cuộc sống có phải là tình yêu? Cũng có thể và cũng có thể nói tình yêu là một phần của việc được 'sống'. Ta phải làm mọi thứ dể bản thân tồn tại trên thế gian nhưng trải qua những điều để bồi dưỡng cảm xúc mới gọi là được 'sống'. Yêu và được yêu có thể nói rằng ta đã được 'sống' hơn nửa đời người.",
      "Ta được 'sống' , được yêu, đó được gọi là một cuộc đời bình yên. Ta được là chính ta, ta có nơi quay về, đó là mái ấm, không phải là nơi chốn mà là một người ta gọi là yêu thương.",
    ],
    authorID: 3,
    createdAt: new Date(),
    img: "regret.jpg",
    likes: [3, 4, 7],
  },
  {
    blogID: 4,
    title: "Con cái đã 'dạy' gì cho cha mẹ",
    description:
      "Chúng ta mỗi ngày đều học cách trưởng thành hơn qua kinh nghiệm và trải nghiệm, đến một ngày được lại cha mẹ thì có dễ dàng hơn chăng",
    contents: [
      "Đi qua tuổi trẻ, ta tìm kiếm nơi náo nhiệt. Năng lượng thuần khiét của tuổi dậy thì thúc đẩy ta trải qua những điều ta chưa bao giờ dám. Sau khi nếm đủ hương vị của cuộc sống, những khó khăn và uất ức cũng lần lượt xuất hiện. Thế nên bình yên lại là điều cuối cùng ta muốn có được. Bình yên là gì, là cảm giác được yên lòng, là không cần bận tâm những điều xung quanh, là mỗi ngày đều không có gánh nặng trên vai, là nụ cười trên môi, là những điều mình muốn luôn xuất hiện xung quanh,... Thật ra mỗi người đều có một cái gọi là bình yên, có khi giống nhau cũng có khi giống nhau. Nhưng lại đúc kết ra bình yêu là điều bản thân mong muốn nhất về một cuộc sống.",
      "Thế bản chất cuộc sống là gì? Đối với tác giả, đó là cuộc đời không cô độc. Mỗi cá thể luôn sở hữu một nửa trái tim về mặt tinh thần, luôn có một nửa còn lại đang ở đâu đó trên thế gian đợi ta phát hiện. Thế cuộc sống có phải là tình yêu? Cũng có thể và cũng có thể nói tình yêu là một phần của việc được 'sống'. Ta phải làm mọi thứ dể bản thân tồn tại trên thế gian nhưng trải qua những điều để bồi dưỡng cảm xúc mới gọi là được 'sống'. Yêu và được yêu có thể nói rằng ta đã được 'sống' hơn nửa đời người.",
      "Ta được 'sống' , được yêu, đó được gọi là một cuộc đời bình yên. Ta được là chính ta, ta có nơi quay về, đó là mái ấm, không phải là nơi chốn mà là một người ta gọi là yêu thương.",
    ],
    authorID: 6,
    createdAt: new Date(),
    img: "family.jpg",
    likes: [1, 2, 4, 6, 7],
  },
  {
    blogID: 5,
    title: "Chúng ta chỉ 'chết' đi khi không còn ước mơ",
    description:
      "Cả đời người chúng ta cố gắng để đạt thứ gọi là ước mơ, là điều chúng ta luôn nhắm đến khi bắt đầu có nhận thức",
    contents: [
      "Đi qua tuổi trẻ, ta tìm kiếm nơi náo nhiệt. Năng lượng thuần khiét của tuổi dậy thì thúc đẩy ta trải qua những điều ta chưa bao giờ dám. Sau khi nếm đủ hương vị của cuộc sống, những khó khăn và uất ức cũng lần lượt xuất hiện. Thế nên bình yên lại là điều cuối cùng ta muốn có được. Bình yên là gì, là cảm giác được yên lòng, là không cần bận tâm những điều xung quanh, là mỗi ngày đều không có gánh nặng trên vai, là nụ cười trên môi, là những điều mình muốn luôn xuất hiện xung quanh,... Thật ra mỗi người đều có một cái gọi là bình yên, có khi giống nhau cũng có khi giống nhau. Nhưng lại đúc kết ra bình yêu là điều bản thân mong muốn nhất về một cuộc sống.",
      "Thế bản chất cuộc sống là gì? Đối với tác giả, đó là cuộc đời không cô độc. Mỗi cá thể luôn sở hữu một nửa trái tim về mặt tinh thần, luôn có một nửa còn lại đang ở đâu đó trên thế gian đợi ta phát hiện. Thế cuộc sống có phải là tình yêu? Cũng có thể và cũng có thể nói tình yêu là một phần của việc được 'sống'. Ta phải làm mọi thứ dể bản thân tồn tại trên thế gian nhưng trải qua những điều để bồi dưỡng cảm xúc mới gọi là được 'sống'. Yêu và được yêu có thể nói rằng ta đã được 'sống' hơn nửa đời người.",
      "Ta được 'sống' , được yêu, đó được gọi là một cuộc đời bình yên. Ta được là chính ta, ta có nơi quay về, đó là mái ấm, không phải là nơi chốn mà là một người ta gọi là yêu thương.",
    ],
    authorID: 2,
    createdAt: new Date(),
    img: "dream.jpg",
    likes: [3, 6],
  },
  {
    blogID: 6,
    title:
      "Quá khứ quyết định hiện tại, hiện tại quyết định tương lai, và tương lai chấp cánh cho hiện tại",
    description:
      "Các cột mốc, thời điểm, khoảng thời gian vòng đời người đều liên quan và bổ trợ nhau như phần không thể thiếu",
    contents: [
      "Đi qua tuổi trẻ, ta tìm kiếm nơi náo nhiệt. Năng lượng thuần khiét của tuổi dậy thì thúc đẩy ta trải qua những điều ta chưa bao giờ dám. Sau khi nếm đủ hương vị của cuộc sống, những khó khăn và uất ức cũng lần lượt xuất hiện. Thế nên bình yên lại là điều cuối cùng ta muốn có được. Bình yên là gì, là cảm giác được yên lòng, là không cần bận tâm những điều xung quanh, là mỗi ngày đều không có gánh nặng trên vai, là nụ cười trên môi, là những điều mình muốn luôn xuất hiện xung quanh,... Thật ra mỗi người đều có một cái gọi là bình yên, có khi giống nhau cũng có khi giống nhau. Nhưng lại đúc kết ra bình yêu là điều bản thân mong muốn nhất về một cuộc sống.",
      "Thế bản chất cuộc sống là gì? Đối với tác giả, đó là cuộc đời không cô độc. Mỗi cá thể luôn sở hữu một nửa trái tim về mặt tinh thần, luôn có một nửa còn lại đang ở đâu đó trên thế gian đợi ta phát hiện. Thế cuộc sống có phải là tình yêu? Cũng có thể và cũng có thể nói tình yêu là một phần của việc được 'sống'. Ta phải làm mọi thứ dể bản thân tồn tại trên thế gian nhưng trải qua những điều để bồi dưỡng cảm xúc mới gọi là được 'sống'. Yêu và được yêu có thể nói rằng ta đã được 'sống' hơn nửa đời người.",
      "Ta được 'sống' , được yêu, đó được gọi là một cuộc đời bình yên. Ta được là chính ta, ta có nơi quay về, đó là mái ấm, không phải là nơi chốn mà là một người ta gọi là yêu thương.",
    ],
    authorID: 2,
    createdAt: new Date(),
    img: "time.jpg",
    likes: [1],
  },
  {
    blogID: 7,
    title: "Ta cần gì khi yêu?",
    description:
      "Buồn, vui, giận, hờn, dỗi, hạnh phúc, đau khổ, say đắm,... Tất cả đều có thể gói gọn trong tình yêu và chúng ta cần điều gì?",
    contents: [
      "Đi qua tuổi trẻ, ta tìm kiếm nơi náo nhiệt. Năng lượng thuần khiét của tuổi dậy thì thúc đẩy ta trải qua những điều ta chưa bao giờ dám. Sau khi nếm đủ hương vị của cuộc sống, những khó khăn và uất ức cũng lần lượt xuất hiện. Thế nên bình yên lại là điều cuối cùng ta muốn có được. Bình yên là gì, là cảm giác được yên lòng, là không cần bận tâm những điều xung quanh, là mỗi ngày đều không có gánh nặng trên vai, là nụ cười trên môi, là những điều mình muốn luôn xuất hiện xung quanh,... Thật ra mỗi người đều có một cái gọi là bình yên, có khi giống nhau cũng có khi giống nhau. Nhưng lại đúc kết ra bình yêu là điều bản thân mong muốn nhất về một cuộc sống.",
      "Thế bản chất cuộc sống là gì? Đối với tác giả, đó là cuộc đời không cô độc. Mỗi cá thể luôn sở hữu một nửa trái tim về mặt tinh thần, luôn có một nửa còn lại đang ở đâu đó trên thế gian đợi ta phát hiện. Thế cuộc sống có phải là tình yêu? Cũng có thể và cũng có thể nói tình yêu là một phần của việc được 'sống'. Ta phải làm mọi thứ dể bản thân tồn tại trên thế gian nhưng trải qua những điều để bồi dưỡng cảm xúc mới gọi là được 'sống'. Yêu và được yêu có thể nói rằng ta đã được 'sống' hơn nửa đời người.",
      "Ta được 'sống' , được yêu, đó được gọi là một cuộc đời bình yên. Ta được là chính ta, ta có nơi quay về, đó là mái ấm, không phải là nơi chốn mà là một người ta gọi là yêu thương.",
    ],
    authorID: 3,
    createdAt: new Date(),
    img: "love.jpg",
    likes: [2, 3],
  },
  {
    blogID: 8,
    title:
      "Người từng gặp trong đời là người đã không có cơ hội ở lại kiếp trước",
    description:
      "Kiếp người luôn là thứ bí ẩn, có ai biết được mình từng là ai và mình sẽ là ai và sẽ lại ai từ kiếp trước.",
    contents: [
      "Đi qua tuổi trẻ, ta tìm kiếm nơi náo nhiệt. Năng lượng thuần khiét của tuổi dậy thì thúc đẩy ta trải qua những điều ta chưa bao giờ dám. Sau khi nếm đủ hương vị của cuộc sống, những khó khăn và uất ức cũng lần lượt xuất hiện. Thế nên bình yên lại là điều cuối cùng ta muốn có được. Bình yên là gì, là cảm giác được yên lòng, là không cần bận tâm những điều xung quanh, là mỗi ngày đều không có gánh nặng trên vai, là nụ cười trên môi, là những điều mình muốn luôn xuất hiện xung quanh,... Thật ra mỗi người đều có một cái gọi là bình yên, có khi giống nhau cũng có khi giống nhau. Nhưng lại đúc kết ra bình yêu là điều bản thân mong muốn nhất về một cuộc sống.",
      "Thế bản chất cuộc sống là gì? Đối với tác giả, đó là cuộc đời không cô độc. Mỗi cá thể luôn sở hữu một nửa trái tim về mặt tinh thần, luôn có một nửa còn lại đang ở đâu đó trên thế gian đợi ta phát hiện. Thế cuộc sống có phải là tình yêu? Cũng có thể và cũng có thể nói tình yêu là một phần của việc được 'sống'. Ta phải làm mọi thứ dể bản thân tồn tại trên thế gian nhưng trải qua những điều để bồi dưỡng cảm xúc mới gọi là được 'sống'. Yêu và được yêu có thể nói rằng ta đã được 'sống' hơn nửa đời người.",
      "Ta được 'sống' , được yêu, đó được gọi là một cuộc đời bình yên. Ta được là chính ta, ta có nơi quay về, đó là mái ấm, không phải là nơi chốn mà là một người ta gọi là yêu thương.",
    ],
    authorID: 4,
    createdAt: new Date(),
    img: "mystery.jpg",
    likes: [2, 4, 6, 3],
  },
  {
    blogID: 9,
    title: "Ánh mắt là nơi không biết nói dối",
    description:
      "Nơi cửa sổ tâm hồn chạm nhau, lời nói không cần nói ra cũng đã hiểu được kể cả lời yêu",
    contents: [
      "Đi qua tuổi trẻ, ta tìm kiếm nơi náo nhiệt. Năng lượng thuần khiét của tuổi dậy thì thúc đẩy ta trải qua những điều ta chưa bao giờ dám. Sau khi nếm đủ hương vị của cuộc sống, những khó khăn và uất ức cũng lần lượt xuất hiện. Thế nên bình yên lại là điều cuối cùng ta muốn có được. Bình yên là gì, là cảm giác được yên lòng, là không cần bận tâm những điều xung quanh, là mỗi ngày đều không có gánh nặng trên vai, là nụ cười trên môi, là những điều mình muốn luôn xuất hiện xung quanh,... Thật ra mỗi người đều có một cái gọi là bình yên, có khi giống nhau cũng có khi giống nhau. Nhưng lại đúc kết ra bình yêu là điều bản thân mong muốn nhất về một cuộc sống.",
      "Thế bản chất cuộc sống là gì? Đối với tác giả, đó là cuộc đời không cô độc. Mỗi cá thể luôn sở hữu một nửa trái tim về mặt tinh thần, luôn có một nửa còn lại đang ở đâu đó trên thế gian đợi ta phát hiện. Thế cuộc sống có phải là tình yêu? Cũng có thể và cũng có thể nói tình yêu là một phần của việc được 'sống'. Ta phải làm mọi thứ dể bản thân tồn tại trên thế gian nhưng trải qua những điều để bồi dưỡng cảm xúc mới gọi là được 'sống'. Yêu và được yêu có thể nói rằng ta đã được 'sống' hơn nửa đời người.",
      "Ta được 'sống' , được yêu, đó được gọi là một cuộc đời bình yên. Ta được là chính ta, ta có nơi quay về, đó là mái ấm, không phải là nơi chốn mà là một người ta gọi là yêu thương.",
    ],
    authorID: 7,
    createdAt: new Date(),
    img: "eyes.jpg",
    likes: [1, 2, 7, 6],
  },
  {
    blogID: 10,
    title: "Do not live without smile!",
    description: "Smile is a cure for everthing happened in the world.",
    contents: [
      "Đi qua tuổi trẻ, ta tìm kiếm nơi náo nhiệt. Năng lượng thuần khiét của tuổi dậy thì thúc đẩy ta trải qua những điều ta chưa bao giờ dám. Sau khi nếm đủ hương vị của cuộc sống, những khó khăn và uất ức cũng lần lượt xuất hiện. Thế nên bình yên lại là điều cuối cùng ta muốn có được. Bình yên là gì, là cảm giác được yên lòng, là không cần bận tâm những điều xung quanh, là mỗi ngày đều không có gánh nặng trên vai, là nụ cười trên môi, là những điều mình muốn luôn xuất hiện xung quanh,... Thật ra mỗi người đều có một cái gọi là bình yên, có khi giống nhau cũng có khi giống nhau. Nhưng lại đúc kết ra bình yêu là điều bản thân mong muốn nhất về một cuộc sống.",
      "Thế bản chất cuộc sống là gì? Đối với tác giả, đó là cuộc đời không cô độc. Mỗi cá thể luôn sở hữu một nửa trái tim về mặt tinh thần, luôn có một nửa còn lại đang ở đâu đó trên thế gian đợi ta phát hiện. Thế cuộc sống có phải là tình yêu? Cũng có thể và cũng có thể nói tình yêu là một phần của việc được 'sống'. Ta phải làm mọi thứ dể bản thân tồn tại trên thế gian nhưng trải qua những điều để bồi dưỡng cảm xúc mới gọi là được 'sống'. Yêu và được yêu có thể nói rằng ta đã được 'sống' hơn nửa đời người.",
      "Ta được 'sống' , được yêu, đó được gọi là một cuộc đời bình yên. Ta được là chính ta, ta có nơi quay về, đó là mái ấm, không phải là nơi chốn mà là một người ta gọi là yêu thương.",
    ],
    authorID: 5,
    createdAt: new Date(),
    img: "eyes.jpg",
    likes: [1, 3, 4],
  },
]);

const roles = ref([
  { roleID: 1, name: "ADMIN" },
  { roleID: 2, name: "USER" },
]);

const comments = ref([
  {
    commentID: 1,
    content: "Hay quá bạn ơi",
    userID: 1,
    createdAt: new Date(),
    likes: [1, 2, 3, 4, 5],
    blogID: 1,
  },
]);

const subsComments = ref([
  {
    subsCommentID: "",
    content: "",
    commentID: "",
    createdAt: "",
    likes: "",
    userID: "",
  },
]);

export { users, blogs, roles, comments, subsComments };
