import requestPlans from '../../libs/fetch';

//   Create a function to consume requestPlans in Async Await instead of then catch
export default () => {
    
 requestPlans('EUR') // return a promise
    .then(plans => plans)
    .catch(err => console.log('Error', err.message));

    return;
}

