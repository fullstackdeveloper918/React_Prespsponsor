import React from 'react'
import {Jumbotron as jumbo, Container, Col, Image, Table, Button, ButtonToolbar, Modal, Checkbox} from 'react-bootstrap'

class StepConfirmation extends React.Component{

constructor(props, context) {
    super();

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

  render() {
    return (

        <div>

        
      <h1> Confirmation</h1>
        <p>Below is Your Desired Sponsorship

        </p>
        <Table striped bordered hover>
  <thead>
    <tr>
     
      <th>Tier Name (Levels)</th>
      <th>Active</th>
      <th>Description of Sponsorship Level</th>
    <th>Sponsor $ Amount</th>
    <th>Slots Available</th>
    <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>Gold</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>5555</td>
     
    </tr>
    <tr>
      
      <td>Silver</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>34334</td>
    
    </tr>
    <tr>
    
      <td>@twitter</td>
      <td>@twitter</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>3434</td>
    </tr>
   
  </tbody>
</Table>
<p>At the end of your sponsorship campaign you will receive the net proceeds (%amount% less 15% transaction fee)</p>
<br />
<p>Before clicking the CONFIRM button, please read the Sponsorship Agreement.
</p>

<br /><br/>
      <ButtonToolbar>
        {/* <Button bsStyle="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button> */}

        <label>
        <input  type="checkbox" onClick={this.handleShow} />I have read and accepted the terms and conditions
      
        </label>
        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
            Sponsorship Agreement

            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>TERMS OF AGREEMENT:</h4>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem! Dolores debitis voluptatibus ipsum
              dicta. Dolor quod amet ab sint esse distinctio tenetur. Veritatis
              laudantium quibusdam quidem corporis architecto veritatis. Ex
              facilis minima beatae sunt perspiciatis placeat. Quasi corporis
              odio eaque voluptatibus ratione magnam nulla? Amet cum maiores
              consequuntur totam dicta! Inventore adipisicing vel vero odio modi
              doloremque? Vitae porro impedit ea minima laboriosam quisquam
              neque. Perspiciatis omnis obcaecati consequatur sunt deleniti
              similique facilis sequi. Ipsum harum vitae modi reiciendis
              officiis. Quas laudantium laudantium modi corporis nihil provident
              consectetur omnis, natus nulla distinctio illum corporis. Sit ex
              earum odio ratione consequatur odit minus laborum? Eos? Sit ipsum
              illum architecto aspernatur perspiciatis error fuga illum, tempora
              harum earum, a dolores. Animi facilis inventore harum dolore
              accusamus fuga provident molestiae eum! Odit dicta error dolorem
              sunt reprehenderit. Sit similique iure quae obcaecati harum. Eum
              saepe fugit magnam dicta aliquam? Sapiente possimus aliquam fugiat
              officia culpa sint! Beatae voluptates voluptatem excepturi
              molestiae alias in tenetur beatae placeat architecto. Sit possimus
              rerum fugiat sapiente aspernatur. Necessitatibus tempora animi
              dicta perspiciatis tempora a velit in! Doloribus perspiciatis
              doloribus suscipit nam earum. Deleniti veritatis eaque totam
              assumenda fuga sapiente! Id recusandae. Consectetur necessitatibus
              eaque velit nobis aliquid? Fugit illum qui suscipit aspernatur
              alias ipsum repudiandae! Quia omnis quisquam dignissimos a
              mollitia. Suscipit aspernatur eum maiores repellendus ipsum
              doloribus alias voluptatum consequatur. Consectetur quibusdam
              veniam quas tenetur necessitatibus repudiandae? Rem optio vel
              alias neque optio sapiente quidem similique reiciendis tempore.
              Illum accusamus officia cum enim minima eligendi consectetur nemo
              veritatis nam nisi! Adipisicing nobis perspiciatis dolorum
              adipisci soluta architecto doloremque voluptatibus omnis debitis
              quas repellendus. Consequuntur assumenda illum commodi mollitia
              asperiores? Quis aspernatur consequatur modi veritatis aliquid at?
              Atque vel iure quos. Amet provident voluptatem amet aliquam
              deserunt sint, elit dolorem ipsa, voluptas? Quos esse facilis
              neque nihil sequi non? Voluptates rem ab quae dicta culpa dolorum
              sed atque molestias debitis omnis! Sit sint repellendus deleniti
              officiis distinctio. Impedit vel quos harum doloribus corporis.
              Laborum ullam nemo quaerat reiciendis recusandae minima dicta
              molestias rerum. Voluptas et ut omnis est ipsum accusamus harum.
              Amet exercitationem quasi velit inventore neque doloremque!
              Consequatur neque dolorem vel impedit sunt voluptate. Amet quo
              amet magni exercitationem libero recusandae possimus pariatur.
              Cumque eum blanditiis vel vitae distinctio! Tempora! Consectetur
              sit eligendi neque sunt soluta laudantium natus qui aperiam
              quisquam consectetur consequatur sit sint a unde et. At voluptas
              ut officiis esse totam quasi dolorem! Hic deserunt doloribus
              repudiandae! Lorem quod ab nostrum asperiores aliquam ab id
              consequatur, expedita? Tempora quaerat ex ea temporibus in tempore
              voluptates cumque. Quidem nam dolor reiciendis qui dolor assumenda
              ipsam veritatis quasi. Esse! Sit consectetur hic et sunt iste!
              Accusantium atque elit voluptate asperiores corrupti temporibus
              mollitia! Placeat soluta odio ad blanditiis nisi. Eius reiciendis
              id quos dolorum eaque suscipit magni delectus maxime. Sit odit
              provident vel magnam quod. Possimus eligendi non corrupti tenetur
              culpa accusantium quod quis. Voluptatum quaerat animi dolore
              maiores molestias voluptate? Necessitatibus illo omnis laborum hic
              enim minima! Similique. Dolor voluptatum reprehenderit nihil
              adipisci aperiam voluptatem soluta magnam accusamus iste incidunt
              tempore consequatur illo illo odit. Asperiores nesciunt iusto nemo
              animi ratione. Sunt odit similique doloribus temporibus
              reiciendis! Ullam. Dolor dolores veniam animi sequi dolores
              molestias voluptatem iure velit. Elit dolore quaerat incidunt enim
              aut distinctio. Ratione molestiae laboriosam similique laboriosam
              eum et nemo expedita. Consequuntur perspiciatis cumque dolorem.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide} >Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>

      </div>
    );

  }
 

}

export default StepConfirmation