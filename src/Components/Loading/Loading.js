import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
    <div>
        <ReactLoading className='flex md:ml-[680px] ml-[120px]' type='spokes' color='#f97316' height={400} width={150} />
    </div>

);

export default Loading;