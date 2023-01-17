AFRAME.registerComponent("flying-target", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        var id = `hurdle${i}`;

        var posX = Math.random() * 3000 + -1000;
        var posY = Math.random() * 2 + -1;
        var posZ = Math.random() * 3000 + -1000;
  
        var position = { x: posX, y: posY, z: posZ };
  
        this.flyingtarget(id, position);
      }
    },
    flyingtarget: (id, position) => {
      var OceanEl = document.querySelector("#ocean");
  
      var tEl = document.createElement("a-entity");

      tEl.setAttribute("id", id);
  
      tEl.setAttribute("position", position);
      tEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
      tEl.setAttribute("gltf-model", "./assets/balloon/scene.gltf");
  
      tEl.setAttribute("static-body",
        {shape:"sphere",
          sphereRadius:20
        }
      )

      birdEl.setAttribute("game-play", {
        elementId: `#${id}`,
      });

      OceanEl.appendChild(tEl);
    },
  });