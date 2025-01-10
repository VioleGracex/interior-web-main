import React from "react";
import { delay, motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";

const TestimonialData = [
  {
    id: 1,
    name: "Джон Доу",
    designation: "Дизайнер",
    img: "https://i.pravatar.cc/300?img=1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Алекс",
    designation: "Разработчик",
    img: "https://i.pravatar.cc/300?img=2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.4,
  },
  {
    id: 3,
    name: "Джордж",
    designation: "Менеджер",
    img: "https://i.pravatar.cc/300?img=3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.6,
  },
];

const Testimonial = () => {
  return (
    <div className="py-14">
      {/* заголовок */}
      <div className="space-y-4 text-center max-w-[550px] mx-auto mb-8">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-4xl font-bold font-serif"
        >
          Отзывы наших клиентов
        </motion.h1>
        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-gray-500 text-sm max-w-[350px] mx-auto"
        >
          Оживите ваш дом с помощью индивидуальных консультаций и тщательно
          подобранных товаров.
        </motion.p>
      </div>
      {/* карточки отзывов */}
      <div className="bg-black p-12">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
          {TestimonialData.map((card) => {
            return (
              <motion.div
                variants={SlideLeft(card.delay)}
                initial="initial"
                whileInView="animate"
                key={card.id}
                className="border-[1px] border-gray-500 px-5 py-10 text-white group hover:bg-gray-800 duration-300"
              >
                {/* Верхняя часть */}
                <div className="flex flex-row items-center gap-3 ">
                  <img
                    src={card.img}
                    alt=""
                    className="w-[60px] rounded-full"
                  />
                  <div>
                    <p className="text-sm font-bold group-hover:text-gray-200">
                      {card.name}
                    </p>
                    <p className="text-gray-400 text-xs group-hover:text-gray-200">
                      {card.designation}
                    </p>
                    <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                {/* Нижняя часть */}
                <div className="mt-5 border-t-2 border-gray-500/40 pt-5">
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 duration-300">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
