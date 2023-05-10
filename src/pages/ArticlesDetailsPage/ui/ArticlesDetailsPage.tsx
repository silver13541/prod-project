import { useTranslation } from 'react-i18next';

const ArticlesDetailsPage = () => {
    const { t } = useTranslation('articles_details');

    return (
        <div>
            {t('articles-details-page')}
        </div>
    );
};

export default ArticlesDetailsPage;
