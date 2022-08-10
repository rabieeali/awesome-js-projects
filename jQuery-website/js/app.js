var base_url = "https://fakestoreapi.com/products";

$(document).ready(function () {
  var cardWrapper = $("#cards-wrapper");

  var card = "";
  $.ajax({
    type: "GET",
    url: base_url,
    success: function (data) {
      $.each(data, function (index, item) {
        card += `
            <div class="col-md-3">
                <div class="card shadow-lg border-0 h-100">
                      <img src=${item.image} class="img-custom p-3 shadow card-img-top" alt=${item.title}>
                    <div class="card-body d-flex flex-column">
                      <h4 class="card-title">${item.title}</h4>
                      <h6 class="card-text"><strong>Price</strong> ${item.price} $</h6>
                      <h6 class="card-text"><strong>Category</strong> ${item.category}</h6>
                      <a href="#" class="btn btn-primary mt-auto">Add to Card</a>
                    </div>
                </div>
            </div>
              `;
        cardWrapper.html(card);
      });

      var searchInput = $("#search-input");
      var term = searchInput.val().toLowerCase();

      searchInput.keyup(function () {
        $.each(data, function (key, value) {
          var output = "";
          if (value.title.indexOf(term) != -1) {
            output += `
                <div class="col-12 p-2">
                <div class="card border-0 shadow-lg p-3">
                    <div class="row d-flex align-items-center g-0">
                      <div class="col-4">
                        <img src=${value.image} class="shadow img-sm  img-fluid rounded-start" alt=${value.title}>
                      </div>
                      <div class="col-8">
                        <div class="card-body">
                          <strong class="card-title fs-6">${value.title}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
                `;
            return $("#search-result").html(output);
          }
          if (!term) {
            return $("#search-result").html("");
          }
          if (value.title.indexOf(term) == -1) {
            return $("#search-result").html(
              `<strong class="text-center text-danger text-capitalize p-2">nothing matched your search!</strong>`
            );
          }
        });
      });

      //   searchInput.keyup(function () {
      //     var title = item.title.toLowerCase();
      //     if (term && title.indexOf(term) != -1) {
      //       var output = "";
      //       output += `
      //     <div class="col-12 p-2">
      //     <div class="card border-0 shadow-lg p-3">
      //         <div class="row d-flex align-items-center g-0">
      //           <div class="col-4">
      //             <img src=${item.image} class="shadow img-sm  img-fluid rounded-start" alt=${item.title}>
      //           </div>
      //           <div class="col-8">
      //             <div class="card-body">
      //               <strong class="card-title fs-6">${item.title}</strong>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      // </div>
      //     `;
      //       $("#search-result").html(output);
      //     } else if (!term) {
      //       $("#search-result").html("");
      //     } else {
      //       $("#search-result").html(
      //         `<strong class="text-center text-danger text-capitalize p-2">nothing matched your search!</strong>`
      //       );
      //     }
      //   });
    },
  });
});
