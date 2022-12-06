import aws from 'aws-sdk'

const region = 'ap-northeast-1'
const accessKeyId = 'AKIAYFWAP35BAQAK5GEY'
const secretAccessKey = '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'
const bucketName = 'book-trading-platform'

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

export async function generateURLUpload(imageName){
    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 60
    })

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
}