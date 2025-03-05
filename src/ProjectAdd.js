import React, { useState } from "react";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import Array from "./ArrayFile";

const ProjectAdd = () => {
  // Sample array of image URLs

 const [Count,setState] = useState(0);

  return (
    <div>
      <IonGrid>
        <IonRow>
          {/* Correctly mapping over the images array */}
          {Array.map((item, index) => (
           
            <IonCol  size="3">
              <div className="card" key={item.id}>
                <img src={item.img} alt="hello" className="card-image" />
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.describtion}</p>
                </div>
                <div className="card-footer">
                   <div className="CardQuantity">
                   <button   onClick={() => setState(Count + 1)}>+</button>
                    <p>{Count}</p>
                    <button onClick={() =>  {
                        if (Count > 0) {
                            setState(Count - 1);
                        }
                      }}>-</button>
                   </div>
                   <button>Add to card</button>
                </div>
              </div>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default ProjectAdd;
