import React from "react";
import style from "./genericgallery.module.css";

const Genericgallery = () => {
  return (
    <div className="sm:px-20 p-8 ">
      <h3 className="text-center text-4xl">
        Generic Gallery
        <hr className={style.hr} />
      </h3>
      <div class="grid sm:grid-cols-4 grid-cols-1 gap-4 my-5 ">
        <div className=" p-2 pb-5 bg-slate-200 rounded">
          <div className={style.container}>
            <div className={style.square}>
              <img
                src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c8fe0c9197d66232511525bfd1cc82&auto=format&fit=crop&w=1100&q=80"
                class="mask"
              />
              <h3 className={style.h1}>Is Apple a Design Company?</h3>
              <p className="py-4">
                Apple is more than a tech company; it became a culture unto
                itself, a passion of most of people and the birthplace of the
                worlds most revolutionized products.
              </p>

              <div className={style.butttondiv}>
                <a href="" className={style.button}>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-2 pb-5 bg-slate-200 rounded">
          <div className={style.container}>
            <div className={style.square}>
              <img
                src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c8fe0c9197d66232511525bfd1cc82&auto=format&fit=crop&w=1100&q=80"
                class="mask"
              />
              <h3 className={style.h1}>Is Apple a Design Company?</h3>
              <p className="py-4">
                Apple is more than a tech company; it became a culture unto
                itself, a passion of most of people and the birthplace of the
                world’s most revolutionized products.
              </p>

              <div className={style.butttondiv}>
                <a href="" className={style.button}>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-2 pb-5 bg-slate-200 rounded">
          <div className={style.container}>
            <div className={style.square}>
              <img
                src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c8fe0c9197d66232511525bfd1cc82&auto=format&fit=crop&w=1100&q=80"
                class="mask"
              />
              <h3 className={style.h1}>Is Apple a Design Company?</h3>
              <p className="py-4">
                Apple is more than a tech company; it became a culture unto
                itself, a passion of most of people and the birthplace of the
                world’s most revolutionized products.
              </p>

              <div className={style.butttondiv}>
                <a href="" className={style.button}>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-2 pb-5 bg-slate-200 rounded">
          <div className={style.container}>
            <div className={style.square}>
              <img
                src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c8fe0c9197d66232511525bfd1cc82&auto=format&fit=crop&w=1100&q=80"
                class="mask"
              />
              <h3 className={style.h1}>Is Apple a Design Company?</h3>
              <p className="py-4">
                Apple is more than a tech company; it became a culture unto
                itself, a passion of most of people and the birthplace of the
                world’s most revolutionized products.
              </p>

              <div className={style.butttondiv}>
                <a href="" className={style.button}>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genericgallery;
