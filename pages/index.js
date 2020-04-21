import requestPlans from '../libs/fetch';
import useSWR from 'swr';

import Layout from '../components/Layout';
import MyTable from '../components/MyTable';
// import CurrencyDropDown from '../components/MyDropdown';

export default function Index() {

  const { data, error } = useSWR('/api/data', requestPlans);
  console.log('here data', data); 

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  // myCallback = (dataFromMyDropdown) => {

  // }

  const indexPageContent = 
    <>
      {/* <CurrencyDropDown plans={data}/> */}
      <MyTable plans={data} />
    </>;



  return <Layout content={ indexPageContent } />;

  }



    