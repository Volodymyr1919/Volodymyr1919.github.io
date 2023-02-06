import React, { useContext, useState }  from 'react';
import { ThemeContext }                 from '../ThemeContext';
import User                             from '../user/User';
import { Modal }                        from 'bootstrap';
import content                          from "./content.scss"

export default function Content() {

    const { theme, toggleTheme }        = useContext(ThemeContext);
    const { name, updateUserName }      = useContext(ThemeContext);
    const { age, updateUserAge }        = useContext(ThemeContext);
    const { email, updateUserEmail }    = useContext(ThemeContext);

    const [validation, setValidation]   = useState("");

    let emailRegexp     = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let nameRegexp      = /[A-Za-z]/;
    let ageRegexp       = /\d/;

    function validateData() {
        if( nameRegexp.test(String(name).toLowerCase())
            &&
            ageRegexp.test(String(age).toLowerCase())
            &&
            age < 100
            &&
            age > 5
            &&
            emailRegexp.test(String(email).toLowerCase())) {

            setValidation("Validation passed");

        } else {

            setValidation("Something went wrong");

        }
    };

    return(
        <main
            className="tab-content"
            id="myTabContent"
            style={{
                background: theme === "light" ? "white" : "#212529",
                color: theme === "light" ? "blue" : "white"
            }}
        >
            <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
            >
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quos! Dolorum, sit. Voluptate, quia impedit. Accusantium autem aut eligendi eveniet quos consequatur incidunt aliquid voluptatem reprehenderit et error cumque suscipit at perspiciatis voluptatum, quae amet fugiat numquam. Tempora fuga perferendis debitis voluptate. Fugit veniam illo impedit, dolorem fuga suscipit iusto accusantium, error quia nemo, sit harum in earum cumque deserunt praesentium. Doloremque officia, molestiae eligendi excepturi, quidem tempore harum atque voluptatibus commodi ipsam maxime, ut minima error. Officia maiores, magnam dolore suscipit quae sit. Iste asperiores quis est beatae amet. Rerum, libero delectus non quas quis, modi aut quisquam voluptatem accusantium voluptate tempora odit, praesentium labore obcaecati. Nisi inventore soluta repudiandae! Harum sit aut aliquam quaerat possimus molestias in, mollitia accusamus, laudantium, sint quos! Illo id dolore placeat vitae laboriosam nemo maxime. At, assumenda minus amet ullam saepe illo ab voluptatum fuga quo harum. Eos totam atque quidem repellat minima praesentium tempora vitae iusto. Aut, delectus. Dignissimos excepturi aliquid suscipit culpa mollitia perferendis minus itaque esse alias modi cupiditate nemo odio, aut quo vero magnam! Quos voluptate similique laudantium fuga aliquid reiciendis dolores facilis eveniet magnam iure unde error sequi cum illum eius quam aliquam doloremque ducimus repudiandae rem, aperiam architecto! Assumenda voluptas ullam maiores natus quisquam cumque pariatur consectetur iure. Nostrum numquam soluta eaque suscipit dicta natus expedita eveniet quibusdam delectus praesentium voluptatibus vitae eligendi in quas, fugit tempora iure accusantium nam. Cumque ipsa sit alias. Molestias facere eos aut architecto, ipsam dignissimos ab esse quidem aliquam adipisci dicta! Totam cumque alias repudiandae voluptatibus, eos possimus sit est ut eum doloribus cum eius minus id sequi in excepturi, delectus distinctio! A porro quidem sint praesentium modi dolore sapiente, aspernatur facere voluptates temporibus quis, nam deserunt, quae enim explicabo! Labore quam sed distinctio facilis in officiis, ut nesciunt nisi, cumque dolorem eius porro voluptatibus, enim quod architecto sunt odio assumenda numquam consectetur rem praesentium nostrum sint. Maiores eveniet natus consequuntur accusamus nisi velit alias tempore magni iure architecto, ullam magnam voluptas adipisci consectetur unde tempora, quis voluptatum. Porro perspiciatis natus alias magnam quasi pariatur et, doloribus nulla autem quae officiis minima suscipit. Minima placeat, explicabo in amet adipisci dignissimos, autem fuga minus optio facere quidem, eaque ipsa repellat? Voluptatibus animi blanditiis libero molestias aut cumque cum nobis unde praesentium, quod perspiciatis quasi, repellat a esse odit dolorum tempora velit quidem in dolores aliquid officiis odio at! Perferendis laudantium iure veritatis repudiandae, aliquid, sapiente accusamus ea ex doloremque expedita fugiat, cum exercitationem mollitia officiis repellendus delectus dolorum culpa velit. Dolorum ut saepe, accusantium incidunt ipsum tempora, nobis eveniet vero praesentium quam voluptatum quo dolores commodi voluptate assumenda iusto deserunt optio aut beatae. Harum repudiandae inventore similique eum architecto facilis explicabo vitae placeat rerum? Aspernatur, reprehenderit quasi consectetur amet doloribus voluptatum tenetur saepe obcaecati rerum debitis optio libero repellendus non ex enim! Iure ipsum in cumque dolores, maiores suscipit nam, dolorum quod, odit animi atque dicta nihil hic asperiores pariatur. Magnam nobis inventore quibusdam eius dolorem quam consequuntur esse laudantium nihil accusantium.
                </p>
                <label htmlFor="name">
                    Name <br />
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => {updateUserName(e)}}
                    />
                </label><br /><br />
                <label htmlFor="age">
                    Age <br />
                    <input
                    type="text"
                    value={age}
                    onChange={(e) => {updateUserAge(e)}}
                    />
                </label><br /><br />
                <label htmlFor="email">
                    E-Mail <br />
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => {updateUserEmail(e)}}
                    />
                </label><br /><br />
                <button
                    type="button"
                    className={theme === "light" ? "btn btn-primary" : "btn btn-outline-primary"}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {validateData()}}
                >
                    Validate
                </button>

                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div
                            className="modal-content"
                            style={{
                                background: theme === "light" ? "white" : "#212529"
                            }}
                        >
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                                style={{
                                    color: theme === "light" ? "blue" : "#fff"
                                }}
                            >
                                Validation
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >    
                            </button>
                        </div>
                        <div
                            className="modal-body"
                            style={{
                                color: theme === "light" ? "blue" : "#fff"
                            }}
                        >
                            {validation}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className={theme === "light" ? "btn btn-secondary" : "btn btn-outline-secondary"}
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className={theme === "light" ? "btn btn-primary" : "btn btn-outline-primary"}
                            >
                                Save changes
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex="0"
            >
                <User />
            </div>
            <div
                className="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabIndex="0"
            >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt laboriosam, quia suscipit earum, quis voluptate nisi aperiam minus deleniti, debitis quo ut! Suscipit nihil cupiditate voluptatum natus harum sunt magnam ipsa est autem consectetur, ea et? Eius corporis libero assumenda maiores nesciunt. Qui dolor autem fugit quibusdam. Laudantium doloribus facilis, consequuntur reiciendis nesciunt, laborum ipsa cum quis alias saepe delectus. Illo delectus at minima possimus beatae officia ratione nobis reiciendis similique nesciunt. Et inventore sapiente quis reprehenderit harum animi. Accusamus, esse. Tempore doloremque porro atque mollitia voluptatibus praesentium odio quos quisquam aut? Recusandae, atque! Aliquam earum cupiditate magnam atque?
                </p>
            </div>
        </main>
    );
}