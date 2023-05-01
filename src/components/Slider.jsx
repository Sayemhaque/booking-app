
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";



export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="h-[400px] w-full rounded-[15px] object-cover  overflow-hidden relative" src="https://images.unsplash.com/photo-1583429891508-015ef9cd958e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGhha2F8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" />
          <h4 className="absolute font-bold bottom-0 left-0 right-0 text-white text-3xl bg-black bg-opacity-40 p-2">DHAKA</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[400px] rounded-[15px] object-cover  overflow-hidden relative" src="https://images.unsplash.com/photo-1630494378404-097499a0fea1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGtvbGthdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" />
          <h4 className="absolute font-bold bottom-0 left-0 right-0 text-white text-3xl bg-black bg-opacity-40 p-2 ">KOLKATA</h4>

        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[400px] rounded-[15px] object-cover overflow-hidden relative" src="https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
          <h4 className="absolute font-bold bottom-0 left-0 right-0 text-white text-3xl bg-black bg-opacity-40 p-2 ">PARIS</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[400px] rounded-[15px] object-cover overflow-hidden relative" src="https://images.unsplash.com/photo-1576359877473-d92bc837facc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y294cyUyMGJhemFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
          <h4 className="absolute font-bold bottom-0 left-0 right-0 text-white text-3xl bg-black bg-opacity-40 p-2 w-fit">COXS BAZAR</h4>
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[400px]  rounded-[15px] object-cover relative" src="https://images.unsplash.com/photo-1642356774953-8f6c294b25b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFybmRhciUyMGJhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="" />
          <h4 className="absolute font-bold bottom-0 left-0 overflow-hidden right-0 text-white text-3xl bg-black bg-opacity-40 p-2">BANDAR BAN</h4>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
