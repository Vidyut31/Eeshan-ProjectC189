AFRAME.registerComponent("torpedoes", {
    init: function () {
      this.shotorpedoes();
    },
    shoottorpedoes: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "z") {
          var torpedoe = document.createElement("a-entity");
  
          torpedoe.setAttribute("geometry", {
            primitive: "sphere",
            radius: 0.3,
          });
  
          torpedoe.setAttribute("material", "color", "black");
  
          var cam = document.querySelector("#camera-rig");
          pos = cam.getAttribute("position");
  
          torpedoe.setAttribute("position", {
            x: pos.x,
            y: pos.y + 1,
            z: pos.z - 0.5,
          });
  
          var camera = document.querySelector("#camera").object3D;
  
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
  
          torpedoe.setAttribute("velocity", direction.multiplyScalar(-50));
  
          var scene = document.querySelector("#scene");

          torpedoe.setAttribute("dynamic-body", {
            shape: "sphere",
            mass: "50",
          });

          torpedoe.addEventListener("collide", this.removetorpedoe);
  
          scene.appendChild(torpedoe);

          this.shootSound();
        }
      });
    },
   removetorpedoes: function (e) {
      var scene = document.querySelector("#scene");
      
      var element = e.detail.target.el;
  
      var elementHit = e.detail.body.el;
  
      if (elementHit.id.includes("enemy")) {
        scene.removeChild(elementHit);
      }
      element.removeEventListener("collide", this.removetorpedoe);
   
      scene.removeChild(element);
    },
    shootSound: function () {
      var entity = document.querySelector("#sound1");
      entity.components.sound.playSound();
    },
  });