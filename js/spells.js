// JavaScript Document
<script type = "text/javascript">
            
			var image2 = document.getElementById("flamethrower");
			
            var currentPos = 0;
            var ia2 = ["Tekstury/Flame1.png", "Tekstury/Flame2.png", "Tekstury/Flame3.png"];
            function volgendefoto() {
				
                if (++currentPos >= ia2.length)
                    currentPos = 0; image2.src = ia2[currentPos];  
					
					}
					setInterval(volgendefoto, 500);
        </script>