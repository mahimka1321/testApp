import React from 'react';
import Header from './Header';
import WrapperTour from './WrapperTour';
import Hoocks from './Hoocks';
import { Link } from 'react-router-dom';
import Menu from './Menu';

import './infoTour.scss';
import Aleks from './assets/img/Александров/1.jpg';

function ShopTour() {

    const {
        numTheme,setNumTheme,search_active, rorp
    }= Hoocks();

    return (
        <div className='bgb'>
            <Header setNumTheme={setNumTheme} numTheme={numTheme} search_active={search_active}/>
            <div className="opMbox">
                <Menu/>
            <div className='info__page_tour sh_op'
            style={{
                position:'relative',
                zIndex:'2'
            }}>
                <div className='top__info_tour'>
                    <div className='slider__tour_info'>
                        <img alt='Тур, ТурБокс, TourBox, дешовые онлайн туры по всей россии.' src={Aleks}/>
                        <div className='__slider_swap'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className='container__wrapper_info'>
                        <h1>Александров - Семейный тур</h1>
                        <div className='status__tour'>
                            <p className='star_'>
                                <span>
                                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.99998 0L9.16285 4.8856L14 5.66901L10.5 9.47191L11.326 14.8418L6.99998 12.3065L2.67372 14.8418L3.50001 9.47191L0 5.66901L4.83685 4.8856L6.99998 0Z" fill="#FAC917"/>
                                    </svg>
                                </span>
                                4.9
                            </p>
                            <p className='routes_'>7 маршрутов</p>
                        </div>
                        <div className="global__info_tour">
                            <p>
                                <span>
                                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.6437 17.3902C21.5675 15.6778 22.0855 13.722 22.0855 11.6444C22.0855 9.5669 21.5675 7.57993 20.6437 5.89867C20.6143 5.83642 20.585 5.8081 20.5583 5.77696C18.6546 2.32379 15.109 0 11.0427 0C7.00584 0 3.46019 2.32379 1.52719 5.77692C1.49781 5.80806 1.46846 5.86748 1.44176 5.89863C0.517952 7.57989 0 9.53572 0 11.6444C0 18.095 4.93132 23.3228 11.016 23.3228C15.0529 23.3228 18.5986 20.999 20.5316 17.5459C20.585 17.4808 20.6143 17.4496 20.6437 17.3902ZM1.12137 12.1935H4.84322C4.90194 13.7219 5.19032 15.2192 5.64955 16.626H2.27475C1.61261 15.2787 1.20947 13.7814 1.12137 12.1935ZM2.27475 6.66H5.64951C5.15823 8.06673 4.89927 9.53289 4.84318 11.0613H1.12137C1.20947 9.47064 1.61261 7.97334 2.27475 6.66ZM20.9908 11.0613H17.3277C17.269 9.53289 16.9806 8.06673 16.5214 6.66H19.8374C20.4996 7.97334 20.9027 9.47064 20.9908 11.0613ZM16.2597 11.0613H11.5874V6.66H15.3653C15.886 8.03559 16.2037 9.50178 16.2597 11.0613ZM11.5901 5.52783V1.24821C12.9731 2.43984 14.0998 3.87768 14.8767 5.49669H11.5901V5.52783ZM10.5221 1.31047V5.49952H7.29154C8.07112 3.90882 9.16845 2.50209 10.5221 1.31047ZM10.5221 6.66V11.0613H5.9085C5.96723 9.53289 6.28231 8.03559 6.80293 6.66H10.5221ZM5.9085 12.1935H10.5221V16.626H6.80293C6.28498 15.2192 5.96723 13.7219 5.9085 12.1935ZM10.5221 17.7553V21.9444C9.16578 20.7839 8.07112 19.346 7.29154 17.7553H10.5221ZM11.5901 22.0038V17.7553H14.8767C14.0704 19.3772 12.9731 20.8122 11.5901 22.0038ZM11.5901 16.626V12.1935H16.2624C16.2037 13.7531 15.8886 15.2504 15.368 16.626H11.5901ZM17.3277 12.1935H20.9908C20.9054 13.7842 20.4996 15.3126 19.8081 16.626H16.5214C16.9806 15.2192 17.269 13.7219 17.3277 12.1935ZM19.1726 5.52783H16.0595C15.3973 3.99939 14.4442 2.56155 13.2908 1.36993C15.683 1.953 17.7602 3.4503 19.1726 5.52783ZM8.90683 1.34161C7.72406 2.56434 6.80293 3.97108 6.10878 5.53067H2.93956C4.35194 3.41915 6.45584 1.89071 8.90683 1.34161ZM2.93956 17.7553H6.08203C6.77355 19.3149 7.69732 20.7216 8.88008 21.9444C6.45584 21.3641 4.35194 19.8357 2.93956 17.7553ZM13.2908 21.9133C14.4442 20.6905 15.3947 19.2838 16.0595 17.7554H19.1459C17.7602 19.8046 15.683 21.333 13.2908 21.9133Z"/>
                                    </svg>
                                </span> 
                                Русский
                            </p>
                            <p>
                                <span>
                                    <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.6244 10.8188L6.67191 19.0464C6.86604 19.0731 7.06428 19.0866 7.26589 19.0854L7.85963 19.082L7.81163 10.7696L7.21789 10.773C7.01628 10.7742 6.81821 10.79 6.6244 10.8188ZM17.3115 10.7147L17.3595 19.027L17.9532 19.0236C18.1549 19.0224 18.3529 19.0066 18.5467 18.9778L18.4992 10.7503C18.3051 10.7236 18.1069 10.7101 17.9052 10.7113L17.3115 10.7147ZM22.0545 9.49981C22.0242 4.25322 17.7465 0.0245886 12.4998 0.0548849C7.25322 0.0851812 3.02456 4.36294 3.05486 9.60953C3.06144 10.7491 3.26865 11.8405 3.6424 12.8509C3.28466 13.469 3.08129 14.1873 3.08571 14.9532C3.09529 16.6111 4.07443 18.0364 5.48236 18.6954L5.43898 11.1835C5.06658 11.363 4.72552 11.5969 4.42508 11.8741C4.31077 11.3326 4.24909 10.7715 4.24576 10.1964C4.21926 5.60564 7.91933 1.8626 12.5101 1.83609C17.101 1.80959 20.844 5.50964 20.8705 10.1004C20.8738 10.6755 20.8186 11.2372 20.7106 11.78C20.4069 11.5064 20.0633 11.2764 19.6887 11.1012L19.7321 18.6131C21.1324 17.9379 22.095 16.5013 22.0854 14.8434C22.081 14.0776 21.8693 13.3617 21.5045 12.7478C21.8665 11.7331 22.0611 10.6394 22.0545 9.49981Z"/>
                                    </svg>
                                </span> 
                                Аудио
                            </p>
                            <p>
                                <span>
                                    <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.6 0.109436H5.4C2.42281 0.109436 0 2.43431 0 5.29125V13.9276C0 16.7845 2.42281 19.1094 5.4 19.1094H21.6C24.5772 19.1094 27 16.7845 27 13.9276V5.29125C27 2.43431 24.5772 0.109436 21.6 0.109436ZM25.8 13.9276C25.8 16.15 23.916 17.9579 21.6 17.9579H5.4C3.084 17.9579 1.2 16.15 1.2 13.9276V5.29125C1.2 3.06883 3.084 1.26095 5.4 1.26095H21.6C23.916 1.26095 25.8 3.06883 25.8 5.29125V13.9276ZM9.6 12.7837C9.6 13.5457 10.4181 14.0277 11.0846 13.6585L16.8141 10.4846C17.5013 10.104 17.5013 9.11592 16.8142 8.73518L11.0847 5.56056C10.4181 5.19125 9.6 5.67328 9.6 6.43526V12.7837ZM10.8 8.4298C10.8 7.66779 11.6182 7.18577 12.2847 7.55511L14.4142 8.73517C15.1014 9.11594 15.1013 10.104 14.4141 10.4846L12.2845 11.6642C11.618 12.0334 10.8 11.5513 10.8 10.7894V8.4298Z"/>
                                    </svg>
                                </span> 
                                Видео
                            </p>
                            <p>
                                <span>
                                    <svg width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.3338 6.36685L18.9559 4.97086C19.5642 4.69167 20.0066 3.68655 20.0066 2.45809V0.587463L15.3338 2.23872C15.2232 2.29456 15.3338 2.7652 15.3338 3.01648V6.36685Z"/>
                                        <path d="M36.9261 16.7107C37.3915 16.8752 37.7018 17.2699 37.7639 17.7963C37.7949 18.1252 37.7018 18.4871 37.5777 18.7503C37.3605 19.0134 37.0502 19.1779 36.7399 19.2108L31.2991 19.6868L30.5203 18.8612L36.5847 18.2239C36.6468 18.2239 36.7088 18.191 36.7709 18.1252C36.8019 18.0594 36.833 17.9936 36.833 17.8621C36.833 17.7305 36.7088 17.5989 36.5537 17.5989L30.5204 18.2544V17.2968L35.9952 16.7107V16.0199C35.9952 14.1119 34.5367 12.5658 32.737 12.5658H27.3687C25.2276 12.5658 23.4589 10.8552 23.2107 8.61827L22.497 1.7101C22.4659 1.47983 22.3728 1.28245 22.1867 1.15087C22.0005 1.01928 21.7833 0.986386 21.5661 1.01928L20.7903 1.18376V2.69698C20.7903 4.14441 19.7973 5.42735 18.3699 5.75631L15.6246 6.33302L15.5674 5.3387L18.2148 4.76943C19.2078 4.53916 19.8904 3.68386 19.8904 2.66409V1.38114L15.3338 2.42018L15.0437 1.49497L21.4419 0.0324003C21.9074 -0.0662879 22.4039 0.0652963 22.7762 0.361361C23.1486 0.657425 23.3968 1.11797 23.4589 1.61141L24.1726 8.51958C24.3588 10.2631 25.7241 11.5789 27.3998 11.5789H32.737C35.0642 11.5789 36.9261 13.5856 36.9261 16.0199V16.7107Z"/>
                                        <path d="M20.7593 8.61828C20.7903 8.88144 20.9765 9.04592 21.2248 9.04592C21.2558 9.04592 21.2558 9.04592 21.2868 9.04592C21.5351 9.01303 21.7212 8.78276 21.6902 8.48669L21.4109 5.8879C21.3799 5.62473 21.1627 5.42736 20.8834 5.46025C20.6352 5.49315 20.449 5.72342 20.48 6.01949L20.7593 8.61828Z"/>
                                        <path d="M31.9612 20.3621C31.8992 19.77 31.5268 19.3095 31.0303 19.1779V18.3226C31.0303 15.5593 28.9203 13.3224 26.3137 13.3224H20.1697C18.2458 13.3224 16.6012 11.7763 16.415 9.7367L15.5772 1.84164C15.5152 1.28241 15.2359 0.78897 14.8325 0.46001C14.3981 0.131049 13.8706 -0.000534497 13.343 0.0981537L1.95491 2.69694C1.48946 2.79563 1.14812 3.25617 1.14812 3.78251V19.3423H1.024C0.465455 19.3423 0 19.8358 0 20.4279V22.2372C0 22.8293 0.465455 23.3228 1.024 23.3228H11.264C11.7295 23.3228 12.1329 22.9609 12.2259 22.5004L15.7634 23.0925C16.8805 23.257 18.0286 23.257 19.1457 23.1583L30.72 21.9411C31.0613 21.9082 31.4027 21.7109 31.6199 21.4148C31.8992 21.1187 31.9923 20.7569 31.9612 20.3621ZM2.14109 3.65093L11.6364 1.47979V3.0588C11.6364 4.27595 10.8296 5.26284 9.65043 5.526L2.07903 7.13791V3.74962C2.07903 3.71672 2.11006 3.65093 2.14109 3.65093ZM2.07903 11.2828H4.43734C4.68558 11.2828 4.90279 11.0525 4.90279 10.7894C4.90279 10.5262 4.68558 10.2959 4.43734 10.2959H2.07903V8.12479L9.86764 6.47999C11.4812 6.08524 12.5983 4.67071 12.5983 3.0259V1.24952L13.5602 1.01924C13.8395 0.953451 14.0878 1.01924 14.305 1.18372C14.5222 1.3482 14.6463 1.61137 14.6773 1.87454L15.5152 9.7696C15.7944 12.3026 17.8114 14.2106 20.2007 14.2106H26.3137C28.3927 14.2106 30.0994 16.0198 30.0994 18.2239V19.0792L19.1147 20.2634C18.0596 20.3621 16.9736 20.3621 15.9186 20.1976L9.06085 19.2437C9.02982 19.2437 9.02982 19.2437 8.99879 19.2437H2.07903V11.2828ZM30.9372 20.7898C30.8752 20.8885 30.7821 20.9214 30.658 20.9543L19.0836 22.1714C18.0286 22.2701 16.9426 22.2701 15.9186 22.1056L11.8846 21.4477C11.7605 21.4148 11.6053 21.4806 11.5122 21.5464C11.4192 21.6451 11.3571 21.7767 11.3571 21.9082V22.2372C11.3571 22.2701 11.3261 22.303 11.295 22.303H1.05503C0.99297 22.303 0.96194 22.2701 0.96194 22.2043V20.395C0.96194 20.3292 0.99297 20.2963 1.05503 20.2963H8.96776L15.7944 21.2503C16.9115 21.4148 18.0907 21.4148 19.2078 21.3161L30.5959 20.099C30.8131 20.0661 30.9993 20.2305 31.0303 20.4608C31.0303 20.5924 30.9993 20.6911 30.9372 20.7898Z"/>
                                        <path d="M1.3153 8.22251L9.44524 6.57771C10.8106 6.24875 11.8035 5.06449 11.8035 3.61706V1.41302L1.74972 3.68285C1.50148 3.74864 1.3153 3.97892 1.3153 4.27498V8.22251Z"/>
                                        <path d="M11.7225 10.3541C11.7535 10.6173 11.9397 10.7818 12.1879 10.7818C12.219 10.7818 12.219 10.7818 12.25 10.7818C12.4982 10.7489 12.6844 10.5186 12.6534 10.2225L12.3741 7.62374C12.3431 7.36057 12.1259 7.1632 11.8466 7.19609C11.5984 7.22899 11.4122 7.45926 11.4432 7.75533L11.7225 10.3541Z"/>
                                    </svg>
                                </span> 
                                93 424 шагов
                            </p>
                            <p>
                                <span>
                                    <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 19.7592L15 20.1424V4.62366L16 4.24048V19.7592Z" fillOpacity="0.5"/>
                                        <path d="M16.1789 20.2261L16.5 20.1031V19.7592V4.24048V3.51344L15.8211 3.77358L14.8211 4.15676L14.5 4.2798V4.62366V20.1424V20.8694L15.1789 20.6093L16.1789 20.2261Z" strokeOpacity="0.5"/>
                                        <path d="M5 19.7592L4 20.1424V4.62366L5 4.24048V19.7592Z" fillOpacity="0.5"/>
                                        <path d="M5.17891 20.2261L5.5 20.1031V19.7592V4.24048V3.51344L4.8211 3.77358L3.8211 4.15676L3.5 4.2798V4.62366V20.1424V20.8694L4.17891 20.6093L5.17891 20.2261Z" strokePpacity="0.5"/>
                                        <path d="M23.1564 13.6416C22.9271 13.6416 22.7395 13.8396 22.7395 14.0817V22.2446L17.7581 20.1764V2.64027C17.7581 2.57426 17.7372 2.53025 17.7164 2.46425C17.633 2.24422 17.3829 2.13421 17.1745 2.22222L11.7345 4.5985L9.17084 3.54238C8.96241 3.45437 8.73314 3.56438 8.64977 3.78441C8.56639 4.00443 8.67061 4.26846 8.87903 4.35647L11.3176 5.3466V22.2226L6.54464 20.1544V2.64027C6.54464 2.59626 6.54464 2.53025 6.5238 2.48625C6.44043 2.26622 6.19031 2.15621 5.98189 2.24422L0.270956 4.5325C0.104214 4.5985 0 4.75252 0 4.95055V22.7727C0 23.0147 0.187585 23.2128 0.416856 23.2128C0.458542 23.2128 0.52107 23.2128 0.562756 23.1908L6.12779 20.9465L11.5678 23.3008C11.5678 23.3008 11.5886 23.3008 11.6094 23.3008C11.6303 23.3008 11.6303 23.3228 11.6511 23.3228C11.672 23.3228 11.7137 23.3228 11.7345 23.3228C11.797 23.3228 11.8387 23.3228 11.9012 23.3008L17.3621 20.9465L23.0105 23.3008C23.0521 23.3228 23.1147 23.3228 23.1564 23.3228C23.3856 23.3228 23.5732 23.1248 23.5732 22.8827V14.0817C23.5732 13.8396 23.3856 13.6416 23.1564 13.6416ZM5.71093 20.1544L0.833712 22.1346V5.25858L5.71093 3.27834V20.1544ZM16.9244 20.1544L12.1514 22.2226V5.3466L16.9244 3.30035V20.1544Z"/>
                                        <path d="M1.04337 13.7099C0.824337 13.7099 0.645126 13.5408 0.645126 13.3341C0.645126 13.1837 0.744688 13.0334 0.903986 12.977L6.35996 11.0037C6.45952 10.9661 6.55908 10.9661 6.63873 11.0037L11.9553 12.9206L16.8737 11.1916C17.0728 11.1164 17.3117 11.2104 17.3914 11.4171C17.471 11.605 17.3715 11.8306 17.1524 11.9057L12.0947 13.6911C11.9951 13.7287 11.8956 13.7287 11.8159 13.6911L6.49934 11.7554L1.18276 13.6911C1.14293 13.7099 1.0832 13.7099 1.04337 13.7099Z"/>
                                        <path d="M26.1785 1.25415C25.4699 0.440053 24.4277 0 23.1772 0H23.1563H23.1355C21.9058 0 20.8219 0.440053 20.1341 1.25415C19.2379 2.28828 18.7793 4.18051 19.8006 6.07274C20.0924 6.5788 20.4468 7.04086 20.8428 7.4369C21.1346 7.74494 21.4055 8.07498 21.6348 8.40502C22.2601 9.37314 22.6353 10.4953 22.7186 11.6834C22.7395 11.9034 22.9062 12.1015 23.1355 12.1015H23.1563C23.3648 12.1015 23.5523 11.9255 23.5732 11.7054C23.6566 10.5393 24.0317 9.41714 24.657 8.42702C24.8863 8.07498 25.1572 7.74494 25.449 7.45891C25.845 7.04086 26.1994 6.5788 26.4912 6.09474C27.5333 4.15851 27.0956 2.26628 26.1785 1.25415ZM25.8034 5.63269C25.5532 6.07274 25.2406 6.46879 24.8863 6.84283C24.5736 7.17287 24.2818 7.54692 24.0109 7.94297C23.6566 8.47103 23.3856 9.0651 23.1772 9.65917C22.9687 9.0431 22.6978 8.47103 22.3435 7.94297C22.0725 7.56892 21.8015 7.19488 21.4681 6.86484C21.1137 6.51279 20.8011 6.09474 20.5301 5.65469C19.9674 4.59856 19.7798 2.94836 20.7594 1.84822C21.4889 1.01212 22.5727 0.880107 23.1563 0.880107H23.1772H23.198C23.7816 0.880107 24.8446 1.01212 25.5949 1.82622C26.5329 2.92636 26.3661 4.57656 25.8034 5.63269Z"/>
                                        <path d="M23.1564 5.5006C22.3435 5.5006 21.6974 4.81852 21.6974 3.96041C21.6974 3.10231 22.3435 2.42023 23.1564 2.42023C23.9692 2.42023 24.6154 3.10231 24.6154 3.96041C24.6154 4.81852 23.9692 5.5006 23.1564 5.5006ZM23.1564 3.30033C22.802 3.30033 22.5311 3.58637 22.5311 3.96041C22.5311 4.33446 22.802 4.62049 23.1564 4.62049C23.5107 4.62049 23.7817 4.33446 23.7817 3.96041C23.7817 3.58637 23.5107 3.30033 23.1564 3.30033Z"/>
                                    </svg>
                                </span> 
                                7 маршрутов
                            </p>
                            <p>
                                <span>
                                    <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.501 9.5012H14.3753V4.68748C14.3753 4.3073 14.0672 4 13.6876 4C13.3081 4 13 4.3073 13 4.68748V10.1873C13 10.5675 13.3081 10.8748 13.6876 10.8748H18.501C18.8813 10.8748 19.1887 10.5675 19.1887 10.1873C19.1887 9.80919 18.8813 9.5012 18.501 9.5012Z"/>
                                        <path d="M23 9.5C23 14.7467 18.7467 19 13.5 19C8.25329 19 4 14.7467 4 9.5C4 4.25329 8.25329 0 13.5 0C18.7467 0 23 4.25329 23 9.5ZM4.95 9.5C4.95 14.222 8.77797 18.05 13.5 18.05C18.222 18.05 22.05 14.222 22.05 9.5C22.05 4.77797 18.222 0.95 13.5 0.95C8.77797 0.95 4.95 4.77797 4.95 9.5Z"/>
                                    </svg>
                                </span> 
                                9 ч
                            </p>
                            <p>
                                <span>
                                    <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.02083 4.13906C7.48573 4.13906 7.0274 3.93576 6.64583 3.53037C6.4615 3.34135 6.31557 3.11421 6.21703 2.86296C6.1185 2.61172 6.06945 2.34169 6.07292 2.06953C6.07292 1.50102 6.26427 1.01407 6.64583 0.608685C7.0274 0.202083 7.48573 0 8.02083 0C8.55594 0 9.01427 0.202083 9.39583 0.608685C9.7774 1.01407 9.96875 1.50102 9.96875 2.06953C9.96875 2.63682 9.7774 3.12377 9.39583 3.53037C9.01427 3.93576 8.55594 4.13906 8.02083 4.13906ZM2.01845 25.1996C1.65365 25.1996 1.37798 24.8691 1.44344 24.5102L4.18758 9.46433C4.33153 8.67507 3.53418 8.04615 2.80016 8.36998L1.74219 8.83674C1.37972 8.99665 1.14583 9.35548 1.14583 9.75166V12.4529C1.14583 12.7694 0.88933 13.0259 0.572917 13.0259C0.256503 13.0259 0 12.7694 0 12.4529V8.93276C0 8.53514 0.235565 8.1753 0.599982 8.01625L5.29948 5.96511C5.8151 5.74112 6.29292 5.68512 6.73177 5.79712C7.17062 5.90911 7.51437 6.18789 7.76302 6.63467L8.88021 8.58246C9.37635 9.43462 10.0547 10.1553 10.9141 10.7433C11.615 11.2229 12.373 11.534 13.1883 11.6767C13.5033 11.7318 13.75 11.9942 13.75 12.314C13.75 12.667 13.4518 12.9499 13.1027 12.8975C12.014 12.7341 11.0453 12.3255 10.1979 11.6709C9.91819 11.458 9.65034 11.2292 9.39547 10.9857C8.72575 10.3459 7.41941 10.6173 7.25355 11.5286L6.82285 13.895C6.76562 14.2094 6.86214 14.5323 7.08257 14.7637L8.89078 16.6622C9.06788 16.8482 9.16667 17.0951 9.16667 17.3519V24.6266C9.16667 24.9431 8.91016 25.1996 8.59375 25.1996C8.27734 25.1996 8.02083 24.9431 8.02083 24.6266V18.7029C8.02083 18.439 7.91656 18.1859 7.73073 17.9986L5.97395 16.2278C5.41372 15.6632 4.45041 15.9469 4.28572 16.7251L2.59028 24.7361C2.5331 25.0063 2.29461 25.1996 2.01845 25.1996ZM17.1875 25.443C16.9027 25.443 16.6719 25.2122 16.6719 24.9274V9.39985C16.6719 8.84757 16.2242 8.39985 15.6719 8.39985H13.375C12.8227 8.39985 12.375 7.95214 12.375 7.39985V1.60868C12.375 1.0564 12.8227 0.608685 13.375 0.608685H21C21.5523 0.608685 22 1.0564 22 1.60869V7.39985C22 7.95214 21.5523 8.39985 21 8.39985H18.7031C18.1508 8.39985 17.7031 8.84757 17.7031 9.39985V24.9274C17.7031 25.2122 17.4723 25.443 17.1875 25.443ZM17.4093 6.56601C17.6152 6.78476 17.9629 6.78476 18.1688 6.56601L19.4643 5.18966C19.8267 4.8046 19.8267 4.20394 19.4643 3.81888L18.1688 2.44253C17.9629 2.22378 17.6152 2.22378 17.4093 2.44253L17.3876 2.46561C17.2108 2.65344 17.2108 2.94646 17.3876 3.13429C17.6806 3.4456 17.4599 3.95645 17.0324 3.95645H14.6416C14.339 3.95645 14.0937 4.20172 14.0937 4.50427C14.0937 4.80682 14.339 5.05209 14.6416 5.05209H17.0324C17.4599 5.05209 17.6806 5.56294 17.3876 5.87425C17.2108 6.06208 17.2108 6.35509 17.3876 6.54293L17.4093 6.56601Z"/>
                                    </svg>
                                </span> 
                                12 км
                            </p>
                            <p>
                                <samp style={{marginTop: '0', marginRight: '5px'}}>
                                <svg width="29" height="23" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.41667 0.871826H26.5833C27.6448 0.871826 28.5 1.72513 28.5 2.76176V19.4913C28.5 20.528 27.6448 21.3813 26.5833 21.3813H2.41667C1.35524 21.3813 0.5 20.528 0.5 19.4913V2.76176C0.5 1.72513 1.35524 0.871826 2.41667 0.871826Z" stroke="#23A6FF"/>
                                    <path d="M24.875 7.89628V14.324C23.1558 14.7326 21.7968 16.0737 21.3808 17.7799H7.61916C7.20322 16.0737 5.84419 14.7326 4.125 14.324V7.89628C5.84419 7.48765 7.20322 6.14658 7.61916 4.44031H21.3808C21.7968 6.14658 23.1558 7.48765 24.875 7.89628Z" stroke="#23A6FF"/>
                                    <path d="M18.8334 11.1101C18.8334 13.4686 16.8986 15.39 14.5001 15.39C12.1016 15.39 10.1667 13.4686 10.1667 11.1101C10.1667 8.7516 12.1016 6.8302 14.5001 6.8302C16.8986 6.8302 18.8334 8.7516 18.8334 11.1101Z" stroke="#23A6FF"/>
                                </svg>
                                </samp> 
                                799 р
                            </p>
                        </div>
                    </div>
                </div>
                <i><Link to='/info-tour'>Назад</Link></i>
                <div className='containet__wrapper_in-tour' style={{marginTop:'80px'}}>
                    <WrapperTour title='Введение'/>
                </div>
                <div className='about__us_tour'>
                    <h1>О туре</h1>
                    <p>Этот тур подойдек каждому, как семье с детьми, так и бабке которая не знает куда слить свои миллиарды и еще какой то текст Конструктор карт Яндекса позволяет создать карту онлайн без навыков программирования. Можно отметить на карте нужные объекты, нарисовать схему проезда, маршрут прогулки или отметить зону доставки. ... Карты для печати в высоком разрешении можно создать только на основе слоя «Схема». Карты для печати в высоком разрешении можно создать только на компьютере в последних версиях браузеров Firefox, Chrome, Яндекс.Браузер, Edge, Safari иммирования. Можно отметить на карте нужные объекты, нарисоват</p>
                </div>
                <div className='map__info_tour'>
                    <h1>Область посещения</h1>
                    <div>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af43c6b160edf8bde304bf9f5a2e192689329022d48f6730c86dc07f36d45aceb&amp;source=constructor" width="400" height="280" frameborder="0"></iframe>
                        <p><span></span>Красным маркером показанна зона которая будет посещена во время прохождения тура</p>
                    </div>
                </div>
                <dic className="city__info_tour">
                    <h1>Краткое описание города</h1>
                    <p>Этот тур подойдек каждому, как семье с детьми, так и бабке которая не знает куда слить свои миллиарды и еще какой то текст Конструктор карт Яндекса позволяет создать карту онлайн без навыков программирования. Можно отметить на карте нужные объекты, нарисовать схему проезда, маршрут прогулки или отметить зону доставки. ... Карты для печати в высоком разрешении можно создать только</p>
                    <div>
                        <Link to='/info-tour'>Назад</Link>
                        <Link to=''>Купить тур</Link>
                        <p>После покупки ваш тур будет в вашем личном кабинете </p>
                    </div>
                </dic>
            </div>
            <div className="opBox opBoxTwoo"></div>
            </div>
        </div>
    );
}

export default ShopTour;
