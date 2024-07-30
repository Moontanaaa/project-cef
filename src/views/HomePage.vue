<template>
    <div>
            <home></home>
            <DownloadCv></DownloadCv>
            <Presentation></Presentation>    
            <graphskill></graphskill>
            <FileProjects></FileProjects>
            <ContactForm></ContactForm>
    </div>
</template>

<script>
    import ContactForm from '@/components/ContactForm.vue';
import DownloadCv from '@/components/DownloadCv.vue';
    import FileProjects from '@/components/FileProjects.vue';
    import graphskill from '@/components/Graphskill.vue';
    import Home from '@/components/Home.vue';
    import Presentation from '@/components/presentation.vue';


    export default {
        name : "HomePage",
            components: {
                graphskill,
                Presentation,
                FileProjects,
                Home,
                DownloadCv,
                ContactForm,
                
       },
    };

    

</script>

