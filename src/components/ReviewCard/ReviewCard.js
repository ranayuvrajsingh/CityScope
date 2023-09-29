import React from 'react';


const ReviewCard = (props) => {

    return (
        <div class="card" style={{width:"552px","height":"300px"}}>
            <div class="card-body p-5">
                <h5 class="card-title">Excellent</h5>
                <h6 class="card-subtitle mb-2 text-muted">★★★★★</h6>
                <p class="card-text">Im absolutely in love. It’s the first video calling software built for people who meet to get work done. Feeling whole lot productive..</p>
                <div className='pt-4' style={{width:"189px","height":"64px","display":"flex","flexDirection":"row"}}>
                <img src="https://s3-alpha-sig.figma.com/img/263b/00c8/73c9d90580bb79622bfa4c078cce65e1?Expires=1677456000&Signature=JWzFj~KwWKtEVF9J~s9hz5OXJYzIYWjUf0opVhV00-r6xYtIEbgIhfLTZLIgVfdpLsKKOcF6-D40T5mD1uFFD3m-~0~CmPfRXmj3hUfAAnFAL5A9lD~MzNEWeZlgXOg86FGIa15UiXM~rl6jIAfhgF3yH1iYjQ~X5~OVgq0ZOTm9l2ieZmoViy3pVSOnTxhXGGT3nRR2B9YD3ngY~ADJjPQ9ND-9Jc5Dz96y1GDhC2CC7vbp4by9R2ADdSH9W4r2TACLjYXfujT0yRg3BZWxOXt101yR6kR53O1yUYZ5q-CSowxiWRIdU7AW5elq23RX6e3DgIUe8skK1TVekUB7Bw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
                style={{width:"20%","height":"100%","borderRadius":"50%"}}/>
                <p className='mx-4 subheading-16'> Andrew Tate <br></br><span> Date </span></p>
                </div>
            </div>
        </div>
    );
};
export default (ReviewCard);