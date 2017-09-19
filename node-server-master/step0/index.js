var http = require('http')

// var server = http.createServer(function(req, res){
//   console.log('jirengu')
//   res.setHeader("Content-Type","text/html; charset=gbk")
//   res.write('<h1>hello world</h1>')
//   res.end()
// })
// server.listen(9000)

var server = http.createServer(function(request, response){
  setTimeout(function(){
    
    response.setHeader("Content-Type","text/html; charset=utf-8")
    response.writeHead(200, 'haha')
    response.write('<html><head><meta charset="utf-8" /></head>')
    response.write('<body>')
    response.write('<h1>你好</h1>')
    response.write('</body>')
    response.write('</html>')
    
    response.end()
  },2000);
})

console.log('open http://localhost:8080')
server.listen(8080)