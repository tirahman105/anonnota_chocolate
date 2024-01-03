import chocolate from "../../assets/images/chocolate-benifits.png";

const HealthBenifits = () => {
  return (
    <div>
      {/* 
      <div>

      </div> */}
      <div className="container mx-auto px-7 mb-5">
        <div className="text-center py-10">
          <h3 className="text-amber-800 text-3xl font-bold">
            Health Benifits of Chocolate
          </h3>
          <p className="text-amber-700">
            All our featured products loved by our customers.{" "}
          </p>
        </div>
        <div className="divider"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-3">
          <div className="flex flex-col mx-auto  gap-1">
            <div className="card" data-aos="fade-right">
              <div className="card bg-[#FDEEDC] hover:bg-gradient-to-br from-amber-100 to-orange-200 py-4  flex justify-center items-center">
                <div className="flex justify-start items-center ">
                  <div className="flex justify-center">
                    <div className="basis-1/4">
                      <img
                        className="w-2/4"
                        src="https://cdn-icons-png.flaticon.com/512/10808/10808894.png"
                        alt=""
                      />
                    </div>
                    <div className="basis-1/2">
                      <h2 className="text-2xl">Rich in Antioxidants</h2>
                      <p>Chocolate's Defense Against Aging and Diseases!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card " data-aos="fade-right">
              <div className="card bg-[#FDEEDC] hover:bg-gradient-to-br from-amber-100 to-orange-200 py-4  flex justify-center items-center">
                <div className="flex justify-start items-center ">
                  <div className="flex justify-center">
                    <div className="basis-1/4">
                      <img
                        className="w-2/4"
                        src="https://cdn-icons-png.flaticon.com/512/8712/8712794.png"
                        alt=""
                      />
                    </div>
                    <div className="basis-1/2">
                      <h2 className="text-2xl">Heart Health</h2>
                      <p>
                        Chocolate's Moderation Boosts Cardiovascular Wellness!{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card " data-aos="fade-right">
              <div className="card bg-[#FDEEDC] hover:bg-gradient-to-br from-amber-100 to-orange-200 py-4  flex justify-center items-center">
                <div className="flex justify-start items-center ">
                  <div className="flex justify-center">
                    <div className="basis-1/4">
                      <img
                        className="w-2/4"
                        src="https://cdn-icons-png.flaticon.com/512/10034/10034122.png"
                        alt=""
                      />
                    </div>
                    <div className="basis-1/2">
                      <h2 className="text-2xl">Mood Enhancement</h2>
                      <p>Chocolate's Serotonin Kick for Stress Relief</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" data-aos="fade-right">
              <div className="card bg-[#FDEEDC] hover:bg-gradient-to-br from-amber-100 to-orange-200 py-4  flex justify-center items-center">
                <div className="flex justify-start items-center ">
                  <div className="flex justify-center">
                    <div className="basis-1/4">
                      <img
                        className="w-2/4"
                        src="https://cdn-icons-png.flaticon.com/512/11604/11604036.png"
                        alt=""
                      />
                    </div>
                    <div className="basis-1/2">
                      <h2 className="text-2xl">Improved Cognitive Function</h2>
                      <p>
                        Chocolate's Flavonoids Fuel Improved Cognitive Function!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card " data-aos="zoom-in">
            <img
              className="w-3/4 object-cover  rounded-lg"
              src={chocolate}
              alt=""
            />
          </div>
        </div>

        {/* <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 ...">
          01
          <div className="card bg-slate-300 p-4">Test</div>
          <div className="card bg-slate-300 p-4">Test</div>
          <div className="card bg-slate-300 p-4">Test</div>
          <div className="card bg-slate-300 p-4">Test</div>
        </div>
        <div className="col-span-2 ... flex">
          02
          <div className="card bg-slate-300 w-full"> test 2</div>
          <div className="card bg-slate-300 w-full"> test 2</div>
        </div>
        <div className="row-span-2 col-span-2 ...">
          03 <div className=" bg-red-300">test 3</div>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default HealthBenifits;
