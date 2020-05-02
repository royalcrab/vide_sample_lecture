    res.render('video', 
    { title: 'Video',
      _videoname: '/videos/' + req.params.name
    });

    