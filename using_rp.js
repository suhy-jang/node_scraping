const rp = require('request-promise');
rp(url)
  .then(function (html) {
    const address = 'main p';
    const questions = [];
    const answers = [];
    const startIndex = 5;
    const endIndex = 25;
    for (let i = startIndex; i < endIndex; i += 2) {
      questions.push($(address, html)[i].children[0].data);
      answers.push($(address, html)[i + 1].children[0].data);
    }
    console.log(questions, answers);
  })
  .catch(function (err) {
    //handle error
    console.error(err);
  });
