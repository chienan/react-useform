function getPagination(offset, limit, total) {

  //計算頁面總數量
  var totalPage = Math.ceil(total / limit)

  //計算當下頁籤
  var currentPage = Math.ceil((offset + 1) / limit)

  //顯示頁籤範圍
  var a = currentPage

  if (a + 2 > totalPage) {
    var overflow = (a + 2) - totalPage
    a = a - overflow
  }

  if (a - 2 < 1) {
    var underflow = (a - 2) - 1
    a = a - underflow
  }

  var renderPages = [a-2, a-1, a, a+1, a+2]

  var output = {
    currentPage,
    totalPage,
    renderPages
  }
  console.log(output)
}


getPagination(0, 5, 33) // { currentPage: 1, totalPage: 7, renderPages: [1,2,3,4,5] }

getPagination(5, 5, 33) // { currentPage: 2, totalPage: 7, renderPages: [1,2,3,4,5] }

getPagination(10, 5, 33) // { currentPage: 3, totalPage: 7, renderPages: [1,2,3,4,5] }

getPagination(15, 5, 33) // { currentPage: 4, totalPage: 7, renderPages: [2,3,4,5,6] }

getPagination(20, 5, 33) // { currentPage: 5, totalPage: 7, renderPages: [3,4,5,6,7] }
