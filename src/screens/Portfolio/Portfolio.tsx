import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Lab", href: "#lab" },
];

const workExperienceCards = [
  {
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing\ntool of digital onboard process.",
    image: "/group-2.png",
    maskImage: "/mask-group-1.png",
  },
  {
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing\ntool of digital onboard process.",
    image: "/group-1935.png",
    maskImage: "/mask-group-4.png",
  },
  {
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing\ntool of digital onboard process.",
    image: "/group-1938.png",
    maskImage: "/mask-group-2.png",
  },
  {
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing\ntool of digital onboard process.",
    image: "/icons.png",
    maskImage: "/mask-group-3.png",
  },
];

const gradientBlobs = [
  {
    className:
      "w-[642px] h-[720px] top-[2580px] left-[858px] rounded-[321px/360px]",
  },
  {
    className:
      "w-[625px] h-[700px] top-[1022px] left-[739px] rounded-[312.5px/350px]",
  },
  {
    className:
      "w-[625px] h-[700px] top-[2571px] left-[1084px] rounded-[312.5px/350px]",
  },
  {
    className:
      "w-[572px] h-[641px] top-[3166px] left-[274px] rounded-[286px/320.5px]",
  },
  {
    className:
      "w-[385px] h-[431px] top-[220px] left-[385px] rounded-[192.5px/215.5px]",
  },
];

export const Portfolio = (): JSX.Element => {
  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white overflow-hidden w-[1980px] h-[4400px] relative">
        <div className="absolute w-[1980px] h-[4400px] top-0 left-0">
          <img
            className="absolute w-[1980px] h-[4298px] top-[102px] left-0"
            alt="Frame"
            src="/frame-1.svg"
          />

          {gradientBlobs.map((blob, index) => (
            <div
              key={`blob-${index}`}
              className={`${blob.className} absolute [background:radial-gradient(50%_50%_at_50%_50%,rgba(118,60,172,1)_0%,rgba(50,15,133,0)_100%)]`}
            />
          ))}

          <img
            className="absolute w-[583px] h-[341px] top-[2762px] left-[1047px]"
            alt="Portfolio"
            src="/portfolio.png"
          />

          <img
            className="absolute w-[583px] h-[341px] top-[3330px] left-[460px]"
            alt="Portfolio"
            src="/portfolio-1.png"
          />

          <header className="absolute w-[1980px] h-[113px] top-0 left-0 bg-[#190b2d] shadow-[0px_6px_22px_-3px_#0000001a]">
            <img
              className="absolute w-[35px] h-[43px] top-[35px] left-[497px]"
              alt="Logo"
              src="/logo.png"
            />

            <nav className="flex items-center justify-center gap-[117px] absolute top-[42px] left-[1111px]">
              {navigationItems.map((item, index) => (
                <a
                  key={`nav-${index}`}
                  href={item.href}
                  className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-xl text-center tracking-[0.40px] text-white leading-[normal] hover:text-[#7127ba] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </header>

          <main>
            <section className="absolute w-[258px] h-[259px] top-[306px] left-[461px] rounded-[129px/129.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,1)_18%,rgba(67,67,67,0)_100%)]">
              <img
                className="absolute w-[165px] h-[223px] top-1.5 left-12 object-cover"
                alt="Profile"
                src="/image-1.png"
              />
            </section>

            <section className="absolute top-[245px] left-[707px]">
              <div className="w-[245px] h-5 [font-family:'Preahvihear',Helvetica] font-normal text-transparent text-[19px] text-center leading-[19px] whitespace-nowrap">
                <span className="text-white tracking-[0] leading-[0.1px]">
                  Hello! I Am{" "}
                </span>
                <span className="text-[#7127ba] tracking-[-0.10px] leading-[97px]">
                  Ibrahim Memon
                </span>
              </div>

              <div className="h-[31px] top-[106px] [font-family:'Preahvihear',Helvetica] font-normal text-white text-[17px] text-center tracking-[0.34px] leading-[normal] underline absolute">
                A Designer who
              </div>

              <div className="h-[126px] top-[134px] [font-family:'Preahvihear',Helvetica] font-normal text-transparent text-[50px] tracking-[1.00px] leading-[35.1px] absolute">
                <span className="text-white tracking-[0.50px]">
                  Judges a book
                  <br />
                  by its{" "}
                </span>
                <span className="text-[#7127ba] tracking-[0.50px]">cover</span>
                <span className="text-white tracking-[0.50px]">...</span>
              </div>

              <div className="h-5 top-[263px] [font-family:'Preahvihear',Helvetica] font-normal text-white text-[11px] text-center tracking-[0.22px] leading-[normal] absolute">
                Because if the cover does not impress you what else can?
              </div>

              <div className="w-[189px] h-[58px] top-[198px] left-[150px] rounded-[94.29px/28.95px] border border-solid border-white rotate-[-4.74deg] absolute" />
            </section>

            <img
              className="absolute w-[121px] h-[118px] top-56 left-[604px]"
              alt="Arrow"
              src="/arrow.png"
            />

            <section className="absolute top-[660px] left-[474px]">
              <h1 className="w-[674px] h-[90px] [font-family:'Preahvihear',Helvetica] font-normal text-white text-[50px] tracking-[1.00px] leading-[normal]">
                I&#39;m a Software Engineer.|
              </h1>

              <div className="w-[575px] h-[38px] top-[77px] relative">
                <div className="w-[573px] h-[38px] [font-family:'Preahvihear',Helvetica] font-normal text-transparent text-[21px] tracking-[0.42px] leading-[normal]">
                  <span className="text-white tracking-[0.09px]">
                    Currently, I&#39;m a Software Engineer
                    at&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </span>
                  <span className="text-[#1877f2] tracking-[0.09px]">
                    Facebook
                  </span>
                  <span className="text-white tracking-[0.09px]">,</span>
                </div>
                <div className="absolute w-5 h-[21px] top-2 left-[429px] bg-[url(/image-8.png)] bg-cover bg-[50%_50%]" />
              </div>

              <p className="w-[892px] h-[120px] top-[184px] [font-family:'Preahvihear',Helvetica] font-normal text-white text-[22px] tracking-[0.44px] leading-[normal] absolute">
                A self-taught UI/UX designer, functioning in the industry for 3+
                years now.
                <br />I make meaningful and delightful digital products that
                create an equilibrium
                <br />
                between user needs and business goals.
              </p>
            </section>

            <section className="absolute top-[1134px] left-[468px]">
              <h2 className="h-[72px] [font-family:'Preahvihear',Helvetica] font-normal text-white text-[40px] tracking-[0.80px] leading-[normal]">
                Work Experience
              </h2>

              <div className="grid grid-cols-2 gap-4 mt-[117px] w-[1164px]">
                {workExperienceCards.map((card, index) => (
                  <Card
                    key={`work-card-${index}`}
                    className="relative w-[574px] h-[193px] bg-[linear-gradient(163deg,rgba(19,4,40,1)_7%,rgba(37,16,67,1)_34%,rgba(56,18,109,1)_57%,rgba(38,16,69,1)_85%,rgba(25,6,52,1)_100%)] rounded-[15px] shadow-[4px_7px_26px_#0000001f] border-0"
                  >
                    <CardContent className="p-0 relative h-full">
                      <img
                        className="absolute w-[592px] h-[172px] top-0 left-[-22px]"
                        alt="Mask group"
                        src={card.maskImage}
                      />

                      <div className="absolute top-[50px] left-[217px] w-64 [font-family:'Poppins',Helvetica] font-semibold text-white text-[26px] tracking-[0] leading-[32.5px] whitespace-nowrap">
                        {card.title}
                      </div>

                      <div className="absolute top-[85px] left-[218px] w-[232px] [font-family:'Poppins',Helvetica] font-medium text-white text-[8px] tracking-[0] leading-[10.5px]">
                        {card.description.split("\n").map((line, lineIndex) => (
                          <React.Fragment key={lineIndex}>
                            {line}
                            {lineIndex <
                              card.description.split("\n").length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </div>

                      <Button className="absolute top-[116px] left-[215px] w-[121px] h-[33px] bg-[url(/rectangle-977.svg)] bg-[100%_100%] border-0 p-0 h-auto">
                        <div className="w-[77px] [font-family:'Poppins',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[15px] whitespace-nowrap">
                          LEARN MORE
                        </div>
                      </Button>

                      <img
                        className="absolute w-[120px] h-[115px] top-10 left-[72px]"
                        alt="Group"
                        src={card.image}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="absolute w-[895px] h-[754px] top-[1817px] left-[598px]">
              <div className="h-[754px]">
                <div className="relative w-[899px] h-[754px]">
                  <div className="absolute w-[663px] h-[65px] top-0 left-[123px]">
                    <div className="h-[65px] [font-family:'Preahvihear',Helvetica] font-normal text-white text-2xl text-center tracking-[0.48px] leading-[31px]">
                      <span className="tracking-[0.12px]">
                        I&#39;m currently looking to join a cross-functional
                        team
                        <br />
                      </span>
                      <span className="text-[17px] tracking-[0.06px]">
                        that values improving people&#39;s lives through
                        accessible design{" "}
                      </span>
                    </div>
                    <div className="absolute h-[31px] top-0 left-[380px] [font-family:'Preahvihear',Helvetica] font-normal text-[#a261ff] text-2xl text-center tracking-[0.48px] leading-[31px] whitespace-nowrap">
                      cross-functional
                    </div>
                  </div>

                  <div className="absolute w-[895px] h-[657px] top-[97px] left-0">
                    <img
                      className="absolute w-[123px] h-[278px] top-[85px] left-[461px]"
                      alt="Vector"
                      src="/vector-25.svg"
                    />
                    <img
                      className="absolute w-[71px] h-[270px] top-[102px] left-[452px]"
                      alt="Vector"
                      src="/vector-26.svg"
                    />
                    <img
                      className="absolute w-[35px] h-[292px] top-[101px] left-[436px]"
                      alt="Vector"
                      src="/vector-27.svg"
                    />
                    <img
                      className="absolute w-[119px] h-[301px] top-[95px] left-[303px]"
                      alt="Vector"
                      src="/vector-28.svg"
                    />
                    <img
                      className="absolute w-[67px] h-[310px] top-[95px] left-[365px]"
                      alt="Vector"
                      src="/vector-29.svg"
                    />
                    <img
                      className="absolute w-[22px] h-[313px] top-[98px] left-[414px]"
                      alt="Vector"
                      src="/vector-30.svg"
                    />

                    <div className="absolute w-[542px] h-[330px] top-[327px] left-[181px] rounded-[271px/165px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(118,60,172,1)_0%,rgba(50,15,133,0)_100%)]" />

                    <img
                      className="absolute w-[374px] h-[105px] top-0 left-[255px]"
                      alt="Group"
                      src="/group-1899.png"
                    />

                    <div className="absolute w-[180px] h-[180px] top-[351px] left-[350px] rounded-[90px] bg-[linear-gradient(180deg,rgba(48,16,128,0.6)_0%,rgba(120,64,173,0.36)_100%)]" />

                    <img
                      className="absolute w-[104px] h-[118px] top-96 left-[388px]"
                      alt="Group"
                      src="/group-1897.png"
                    />

                    <img
                      className="absolute w-[881px] h-[269px] top-[360px] left-0"
                      alt="Ellipse"
                      src="/ellipse-21.svg"
                    />
                    <img
                      className="absolute w-[764px] h-[269px] top-[360px] left-[63px]"
                      alt="Ellipse"
                      src="/ellipse-22.svg"
                    />
                    <img
                      className="absolute w-[695px] h-[269px] top-[360px] left-[108px]"
                      alt="Ellipse"
                      src="/ellipse-23.svg"
                    />

                    <div className="absolute w-[306px] h-[275px] top-72 left-[292px] bg-[url(/ellipse-24.svg)] bg-[100%_100%]">
                      <img
                        className="absolute w-[295px] h-[164px] top-[91px] left-[5px]"
                        alt="Ellipse"
                        src="/ellipse-25.svg"
                      />
                    </div>

                    <img
                      className="absolute w-5 h-[21px] top-[438px] left-[833px]"
                      alt="Group"
                      src="/group.png"
                    />
                    <img
                      className="absolute w-[13px] h-[15px] top-[408px] left-[771px]"
                      alt="Vector"
                      src="/vector-1.svg"
                    />
                    <img
                      className="absolute w-4 h-[22px] top-[491px] left-[879px]"
                      alt="Vector"
                      src="/vector-2.svg"
                    />
                    <img
                      className="absolute w-[11px] h-[19px] top-[578px] left-[766px]"
                      alt="Group"
                      src="/group-1.png"
                    />
                    <img
                      className="absolute w-3.5 h-[15px] top-[511px] left-[826px]"
                      alt="Group"
                      src="/group-1900.png"
                    />
                    <img
                      className="absolute w-5 h-[11px] top-[415px] left-[709px]"
                      alt="Group"
                      src="/group-1901.png"
                    />
                    <img
                      className="absolute w-3.5 h-[17px] top-[480px] left-[120px]"
                      alt="Vector"
                      src="/vector.svg"
                    />
                    <img
                      className="absolute w-[13px] h-5 top-[549px] left-7"
                      alt="Group"
                      src="/group-1905.png"
                    />
                    <img
                      className="absolute w-3 h-[15px] top-[387px] left-[187px]"
                      alt="Group"
                      src="/group-1902.png"
                    />
                    <img
                      className="absolute w-[13px] h-[15px] top-[424px] left-[82px]"
                      alt="Group"
                      src="/group-1903.png"
                    />
                    <img
                      className="absolute w-[22px] h-[19px] top-[558px] left-32"
                      alt="Group"
                      src="/group-1904.png"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="absolute w-[628px] h-[333px] top-[2786px] left-[462px]">
              <div className="absolute w-[287px] h-[70px] top-0 left-0">
                <div className="absolute h-6 top-0 left-0 [font-family:'Poppins',Helvetica] font-semibold text-[#9757d3] text-base tracking-[0.32px] leading-[normal]">
                  Featured&nbsp;&nbsp;Project
                </div>
                <div className="absolute h-[51px] top-[19px] left-0 [font-family:'Poppins',Helvetica] font-semibold text-[#ccd6f6] text-[34px] tracking-[0.68px] leading-[normal]">
                  Example Project
                </div>
              </div>

              <div className="absolute h-[108px] top-[126px] left-8 [font-family:'Poppins',Helvetica] font-medium text-[#ccd6f6] text-lg tracking-[0] leading-[normal]">
                A web app for visualizing personalized Spotify data. View your
                <br />
                top artists, top tracks, recently played tracks, and detailed
                audio
                <br />
                information about each track. Create and save new playlists of
                <br />
                recommended tracks based on your existing playlists and more.
              </div>

              <img
                className="top-[301px] left-[25px] absolute w-[31px] h-[31px]"
                alt="Icon park solid"
                src="/icon-park-solid-click-3.svg"
              />

              <div className="absolute w-[31px] h-[31px] top-[302px] left-[73px] bg-[url(/icon-park-solid-click-5.svg)] bg-[100%_100%]">
                <img
                  className="absolute w-[31px] h-[31px] top-0 left-0"
                  alt="Icon park solid"
                  src="/icon-park-solid-click-1.svg"
                />
              </div>
            </section>

            <img
              className="absolute w-[669px] h-[165px] top-[2886px] left-[460px]"
              alt="Card"
              src="/card.png"
            />

            <img
              className="absolute w-[583px] h-[341px] top-[2762px] left-[1047px]"
              alt="Mask group"
              src="/mask-group.png"
            />

            <section className="absolute w-[675px] h-[329px] top-[3337px] left-[961px]">
              <div className="absolute w-[287px] h-[70px] top-0 left-[382px]">
                <div className="absolute h-6 top-0 left-[141px] [font-family:'Poppins',Helvetica] font-semibold text-[#9757d3] text-base tracking-[0.32px] leading-[normal]">
                  Featured&nbsp;&nbsp;Project
                </div>
                <div className="absolute h-[51px] top-[19px] left-0 [font-family:'Poppins',Helvetica] font-semibold text-[#ccd6f6] text-[34px] tracking-[0.68px] leading-[normal]">
                  Example Project
                </div>
              </div>

              <div className="absolute w-[669px] h-[165px] top-24 left-0 bg-[url(/card-1.png)] bg-[100%_100%]">
                <div className="absolute h-[108px] top-[26px] left-[34px] [font-family:'Poppins',Helvetica] font-medium text-[#ccd6f6] text-lg tracking-[0] leading-[normal]">
                  A web app for visualizing personalized Spotify data. View your
                  <br />
                  top artists, top tracks, recently played tracks, and detailed
                  audio
                  <br />
                  information about each track. Create and save new playlists of
                  <br />
                  recommended tracks based on your existing playlists and more.
                </div>
              </div>

              <img
                className="top-[297px] left-[548px] absolute w-[31px] h-[31px]"
                alt="Icon park solid"
                src="/icon-park-solid-click.svg"
              />

              <div className="absolute w-[31px] h-[31px] top-[298px] left-[596px] bg-[url(/icon-park-solid-click-4.svg)] bg-[100%_100%]">
                <img
                  className="absolute w-[31px] h-[31px] top-0 left-0"
                  alt="Icon park solid"
                  src="/icon-park-solid-click-2.svg"
                />
              </div>
            </section>

            <section className="absolute top-[3904px] left-[458px]">
              <h2 className="h-[45px] [font-family:'Preahvihear',Helvetica] font-normal text-[25px] tracking-[0.50px] text-white leading-[normal]">
                Contact
              </h2>

              <div className="h-[108px] top-[118px] [font-family:'Preahvihear',Helvetica] font-normal text-white text-[15px] tracking-[0.30px] leading-[normal] absolute">
                I&#39;m currently looking to join a cross-functional team that
                values improving people&#39;s lives
                <br />
                through accessible design. or have a project in mind? Let&#39;s
                connect.
                <br />
                <br />
                ibrhaimmemon930@gmail.com
              </div>

              <img
                className="absolute w-[110px] h-[18px] top-[258px] left-0"
                alt="Social icons"
                src="/social-icons.png"
              />
            </section>
          </main>

          <div className="absolute h-10 top-[1065px] left-[-3977px] [font-family:'Preahvihear',Helvetica] font-normal text-black text-[22px] tracking-[0.44px] leading-[normal]">
            Developed web.hr landing page which is utilized in 25,000+
            companies.
          </div>

          <div className="h-[63px] top-[300px] left-[-6366px] [font-family:'Poor_Story',Helvetica] absolute font-normal text-black text-[50px] text-center tracking-[1.00px] leading-[normal]">
            I&#39;m a Software Engineer.
          </div>

          <div className="h-[60px] top-[626px] left-[-5981px] [font-family:'Poetsen_One',Helvetica] whitespace-nowrap absolute font-normal text-black text-[50px] text-center tracking-[1.00px] leading-[normal]">
            I&#39;m a Software Engineer.
          </div>

          <div className="absolute h-[648px] top-[1883px] left-[-4592px] [font-family:'Preahvihear',Helvetica] font-normal text-black text-[40px] tracking-[0.80px] leading-[normal]">
            LinkedIn
            <br />
            &gt;&gt;
            <br />
            Behance
            <br />
            &gt;&gt;
            <br />
            Dribbble
            <br />
            &gt;&gt;
            <br />
            Instagram
            <br />
            &gt;&gt;
            <br />
            logo
          </div>
        </div>
      </div>
    </div>
  );
};
