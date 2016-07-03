import $ from 'jquery';

//original attempt//
// $(".search").click(function (click){
//   click.preventDefault()
//   $.ajax({
//      url: `https://api.soundcloud.com/tracks/?q=${name}&client_id=2465b6169896837c228b85a0d5494d70`,
//     //url: `https://api.soundcloud.com/tracks/?q=lacrea&client_id=2465b6169896837c228b85a0d5494d70`,
//
//     success: function(resp){
//       console.log(resp);
//     }
// })
//Attempt I like better//

$(".search").click(function (click){
  click.preventDefault()
  // var artist =
  // var name = artist.val();
  ////ajax- tell the computer to go get something
  $.ajax({
    url: "https://api.soundcloud.com/tracks/",
    data: {
      ////this is what i want you to get
      client_id: "2465b6169896837c228b85a0d5494d70",
      q: $(".s_artist").val()
    }
    ////bring this to me
}).then(function(tracks){
    console.log(tracks)
    ////put on page
    var trackResults = tracks.map(function (track){
      return `

      <div class="grid" data-stream="${track.stream_url}">
        <div class="artwork">
          <img class="artwork" src="${track.artwork_url}">
        </div>
        <div class="label">${track.title}
        </div>
      </div>
      `
      })
    $(".results").html(trackResults);
    $(".grid").on("click", updateAudio);
  })
});


// pull out the event target
// get the stream url off of it.
// use that to update the `<audio src="data-here">`

function updateAudio (event) {
  var grid = event.currentTarget;
  console.log(grid);
  var stream = grid.dataset.stream;
  console.log(stream);

  $('.song').html(`<audio autoPlay src="${stream}?client_id=2465b6169896837c228b85a0d5494d70" autobuffer autoloop loop controls></audio>
`)
  }
// $(".play").click(function(click){
//
// })
//
// $.ajax({
//   url: "https://api.soundcloud.com/tracks/",
//   data: {
//   client_id: "2465b6169896837c228b85a0d5494d70",
//   q: $(".s_artist").val()
//   }
// })

var baseURL = "https://api.soundcloud.com"

var clientID = "client_id=2465b6169896837c228b85a0d5494d70"
