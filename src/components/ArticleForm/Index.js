import React from 'react';
import './ArticleForm.scss';

const DEFAULT_IMAGE = 'https://unsplash.it/200?random'

class ArticleForm extends React.Component {

    constructor(props) {
        super(props);
        this.saveBtnHandler = this.saveBtnHandler.bind(this);
    }

    getInputFileDataURL() {
        return new Promise((fullfil, rejected) => {
            const input = this.refs.file;
            if (!input.files && !input.files[0]) { 
                rejected();
            }

            try {
                const reader = new FileReader();
                reader.onload = (e) => { fullfil(e.target.result); }
                reader.readAsDataURL(input.files[0]);
            } catch(e) {
                fullfil(DEFAULT_IMAGE);
            }
           
        })
    }
    
    saveBtnHandler() {
        const title = this.refs.title.value;

        const { 
            setCurrentPage,
            createArticle
        } = this.props;


        this.getInputFileDataURL()
            .then((imageDataURL) => {
                createArticle(title, imageDataURL);
            })
            .catch(e => console.error(e))
            .then(setCurrentPage)
    }

    render() {
        return (
            <form className="article-form">
                <h1> Create a new article: </h1>
                <textarea ref="title" ></textarea>
                <h2>Thumbnail upload: </h2>
                <input type="file" ref="file" accept="image/*" />
                <button onClick={(e) => {
                    e.preventDefault();
                    this.saveBtnHandler();
                }}> Save </button>
            </form>
        );
    }
}

export default ArticleForm;