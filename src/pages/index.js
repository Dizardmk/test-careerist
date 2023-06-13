export default function Home() {
  const listOne = [
    {
      title: 'Say hello',
      text: 'Meet your career advisor and choose a financing option. Start your journey toward a successful career in QA',
    },
    {
      title: 'Attend LIVE sessions',
      text: 'Join live or learn via self-paced recorded training. Ask questions, practice new skills with hands-on assignments and get feedback.',
    },
    {
      title: 'Start internship',
      text: 'Gain real-work experience to feature in your resume and job interviews. Our internship is integrated into the program featuring 1:1 career mentorship sessions.',
    },
  ];

  const listTwo = [
    {
      title: 'Graduate',
      text: 'Finish the training program with the technical skills needed to start your career in QA',
    },
    {
      title: 'Get application assistance',
      text: 'Apply to hundreds of the most relevant jobs faster with powerful tools to boost your job search.',
    },
    {
      title: 'You’re hired!',
      text: 'Our graduates acheive an average starting salary of $70-100K per year within months of finishing the program',
    },
  ];

  return (
    <main>
      <section className="section gameplan">
        <div className="container">
          <h1 className="section__title">
            STEP-BY-STEP <br /> GAMEPLAN
          </h1>
          <div className="gameplan__wrapper">
            <div className="gameplan__container">
              <p className="gameplan__label">intensive training</p>
              <ul className="list gameplan__list">
                {listOne.map((item) => (
                  <li className="gameplan__item" key={item.title}>
                    <div>
                      <h2 className="gameplan__title">{item.title}</h2>
                      <p className="gameplan__text">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="gameplan__container">
              <p className="gameplan__label gameplan__label--black">LANDING a job</p>
              <ul className="list gameplan__list gameplan__list--black">
                {listTwo.map((item) => (
                  <li className="gameplan__item gameplan__item--black" key={item.title}>
                    <div>
                      <h2 className="gameplan__title">{item.title}</h2>
                      <p className="gameplan__text">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
