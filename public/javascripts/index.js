
var file = document.getElementById('file')
var form = document.getElementById('form')
var input = document.getElementById('title')
var progressContainer = document.querySelector('.progress')
var progress = document.getElementById('progress')
var area = document.querySelector('.area')
var area2 = document.querySelector('.area2')

file.addEventListener('change', function() {
    var reader = new FileReader()
    reader.onprogress = function() {
        
    }
    reader.onloadend = function() {
        var newImg = new Image()
        newImg.src = reader.result
        newImg.style.width = '100px'
        area2.appendChild(newImg)
    }
    reader.readAsDataURL(this.files[0])
})

form.addEventListener('submit', function(e) {
    e.preventDefault()
    var formData = new FormData()
    formData.append('title', input.value)
    formData.append('file', file.files[0])
    var xhr = new XMLHttpRequest
    xhr.open('POST', '/posts/add' , true)
    xhr.upload.addEventListener('progress', updateProgress, true)
    xhr.upload.addEventListener('loadend', completeLoad, true)
    xhr.send(formData)
    function updateProgress(e) {
        progressContainer.classList.remove('hidden')
        var percent = Math.round((e.loaded / e.total) * 100)
        if(e.loaded == e.total) {
            area.innerHTML = 'Completed!'
            progress.innerHTML = percent + '%'
            progress.style.width = percent + '%'
        } else {
            progress.innerHTML = percent + '%'
            progress.style.width = percent + '%'
            area.innerHTML = e.loaded + ' uploaded of ' + e.total
        }
    }
    function completeLoad(e) {
        
    }
})
